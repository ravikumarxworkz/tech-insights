// src/services/adminService.js
import {
  db,
} from './firebase';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  startAfter,
  Timestamp,
  doc,
  getDoc,
} from 'firebase/firestore';

/**
 * Helper function to convert Firestore timestamp to Date
 */
const convertTimestamp = (timestamp) => {
  if (!timestamp) return null;
  if (timestamp.toDate && typeof timestamp.toDate === 'function') {
    return timestamp.toDate();
  }
  if (timestamp.seconds) {
    return new Date(timestamp.seconds * 1000);
  }
  if (timestamp instanceof Date) {
    return timestamp;
  }
  return new Date(timestamp);
};

/**
 * Get all users with pagination
 */
export const getAllUsers = async (pageSize = 20, lastDocSnap = null) => {
  try {
    let q;
    if (lastDocSnap) {
      q = query(
        collection(db, 'users'),
        orderBy('createdAt', 'desc'),
        startAfter(lastDocSnap),
        limit(pageSize)
      );
    } else {
      q = query(
        collection(db, 'users'),
        orderBy('createdAt', 'desc'),
        limit(pageSize)
      );
    }

    const snapshot = await getDocs(q);
    const users = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: convertTimestamp(data.createdAt),
        lastLogin: convertTimestamp(data.lastLogin),
      };
    });

    return {
      users,
      lastDoc: snapshot.docs[snapshot.docs.length - 1] || null,
      hasMore: users.length === pageSize,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

/**
 * Search users by email or display name
 */
export const searchUsers = async (searchTerm) => {
  try {
    const sanitizedTerm = searchTerm.toLowerCase().trim();

    // Query by email
    const emailQuery = query(
      collection(db, 'users'),
      where('email', '>=', sanitizedTerm),
      where('email', '<=', sanitizedTerm + '\uf8ff'),
      orderBy('email'),
      limit(20)
    );

    const emailSnapshot = await getDocs(emailQuery);
    const emailUsers = emailSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: convertTimestamp(data.createdAt),
        lastLogin: convertTimestamp(data.lastLogin),
      };
    });

    // For name search, we need to fetch all and filter (Firestore limitation)
    const allUsersQuery = query(
      collection(db, 'users'),
      orderBy('createdAt', 'desc')
    );
    const allSnapshot = await getDocs(allUsersQuery);
    const nameMatches = allSnapshot.docs
      .filter(doc => {
        const name = (doc.data().displayName || '').toLowerCase();
        return name.includes(sanitizedTerm);
      })
      .map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: convertTimestamp(data.createdAt),
          lastLogin: convertTimestamp(data.lastLogin),
        };
      })
      .slice(0, 20);

    // Merge and deduplicate
    const allResults = [...emailUsers];
    const emailIds = new Set(emailUsers.map(u => u.id));
    nameMatches.forEach(user => {
      if (!emailIds.has(user.id)) {
        allResults.push(user);
      }
    });

    return allResults.slice(0, 20);
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

/**
 * Get all mock attempts for a specific user
 */
export const getUserMockAttemptsAdmin = async (userId) => {
  try {
    const q = query(
      collection(db, 'mockAttempts'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: convertTimestamp(data.createdAt),
        timeStarted: convertTimestamp(data.timeStarted),
      };
    });
  } catch (error) {
    console.error('Error fetching user attempts:', error);
    
    // Fallback: fetch recent attempts and filter
    try {
      const fallbackQuery = query(
        collection(db, 'mockAttempts'),
        orderBy('createdAt', 'desc'),
        limit(500)
      );
      const fallbackSnapshot = await getDocs(fallbackQuery);
      return fallbackSnapshot.docs
        .filter(doc => doc.data().userId === userId)
        .map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: convertTimestamp(data.createdAt),
            timeStarted: convertTimestamp(data.timeStarted),
          };
        })
        .sort((a, b) => {
          const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
          const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
          return dateB - dateA;
        });
    } catch (fallbackError) {
      console.error('Error in fallback:', fallbackError);
      throw fallbackError;
    }
  }
};

/**
 * Get mock attempt details by ID (for viewing full details)
 */
export const getMockAttemptDetailsAdmin = async (mockId) => {
  try {
    const mockRef = collection(db, 'mockAttempts');
    const q = query(mockRef, where('__name__', '==', mockId));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) {
      const docSnapshot = await getDoc(doc(db, 'mockAttempts', mockId));
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        return {
          id: docSnapshot.id,
          ...data,
          createdAt: convertTimestamp(data.createdAt),
          timeStarted: convertTimestamp(data.timeStarted),
        };
      }
      return null;
    }

    const attempt = snapshot.docs[0];
    const data = attempt.data();
    return {
      id: attempt.id,
      ...data,
      createdAt: convertTimestamp(data.createdAt),
      timeStarted: convertTimestamp(data.timeStarted),
    };
  } catch (error) {
    console.error('Error fetching mock details:', error);
    throw error;
  }
};

/**
 * Filter mock attempts by date range
 */
export const filterMockAttemptsByDateRange = (attempts, startDate, endDate) => {
  return attempts.filter(attempt => {
    const attemptDate = attempt.createdAt instanceof Date 
      ? attempt.createdAt 
      : new Date(attempt.createdAt);
    return attemptDate >= startDate && attemptDate <= endDate;
  });
};

/**
 * Export attempts data as CSV
 */
export const exportAsCSV = (attempts, users) => {
  const userMap = {};
  users.forEach(user => {
    userMap[user.id] = user;
  });

  const headers = ['User Name', 'Email', 'Domain', 'Score', 'Accuracy', 'Points', 'Date', 'Time Taken'];
  const rows = attempts.map(attempt => {
    const user = userMap[attempt.userId] || {};
    const dateObj = attempt.createdAt instanceof Date ? attempt.createdAt : new Date(attempt.createdAt);
    const date = dateObj.toLocaleDateString('en-US');
    const time = dateObj.toLocaleTimeString('en-US');

    return [
      user.displayName || 'Unknown',
      user.email || 'N/A',
      attempt.domain || 'N/A',
      attempt.score || 0,
      `${attempt.accuracy || 0}%`,
      attempt.points || 0,
      date,
      time,
    ];
  });

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
  ].join('\n');

  return csvContent;
};

/**
 * Export attempts data as JSON
 */
export const exportAsJSON = (attempts, users) => {
  const userMap = {};
  users.forEach(user => {
    userMap[user.id] = user;
  });

  return JSON.stringify(
    attempts.map(attempt => ({
      userName: userMap[attempt.userId]?.displayName || 'Unknown',
      email: userMap[attempt.userId]?.email || 'N/A',
      domain: attempt.domain || 'N/A',
      score: attempt.score || 0,
      accuracy: attempt.accuracy || 0,
      points: attempt.points || 0,
      totalQuestions: attempt.totalQuestions || 0,
      correctAnswers: attempt.correctAnswers || 0,
      createdAt: attempt.createdAt instanceof Date 
        ? attempt.createdAt.toISOString() 
        : attempt.createdAt,
    })),
    null,
    2
  );
};

/**
 * Download file utility
 */
export const downloadFile = (content, filename, mimeType = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
};