// src/pages/Admin/UserList.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllUsers, searchUsers } from '../../services/adminService';
import { FaSearch, FaUser, FaArrowRight } from 'react-icons/fa';
import './AdminPanel.css';

const UserList = ({ onSelectUser, users, setUsers }) => {
  const [localUsers, setLocalUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(!users || users.length === 0);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(false);

  // Load all users on mount
  useEffect(() => {
    if (users && users.length > 0) {
      setLocalUsers(users);
      setLoading(false);
      return;
    }

    const loadUsers = async () => {
      try {
        setLoading(true);
        const result = await getAllUsers();
        setLocalUsers(result.users);
        setHasMore(result.hasMore);
        setUsers(result.users);
        setError('');
      } catch (err) {
        setError('Failed to load users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // Handle search
  const handleSearch = async (e) => {
    const term = e.target.value.trim();
    setSearchTerm(term);

    if (!term) {
      setLocalUsers(users);
      return;
    }

    try {
      setLoading(true);
      const results = await searchUsers(term);
      setLocalUsers(results);
      setError('');
    } catch (err) {
      setError('Search failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fixed formatDate function to handle Firestore Timestamps
  const formatDate = (date) => {
    if (!date) return 'N/A';
    
    try {
      let dateObj;
      
      // Check if it's a Firestore Timestamp
      if (date && typeof date.toDate === 'function') {
        dateObj = date.toDate();
      } 
      // Check if it's already a Date object
      else if (date instanceof Date) {
        dateObj = date;
      } 
      // Check if it has seconds property (Firestore Timestamp object)
      else if (date && date.seconds) {
        dateObj = new Date(date.seconds * 1000);
      }
      // Try to parse as string or number
      else {
        dateObj = new Date(date);
      }
      
      // Validate the date
      if (isNaN(dateObj.getTime())) {
        return 'N/A';
      }
      
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch (error) {
      console.error('Error formatting date:', error, date);
      return 'N/A';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="users-list-section"
    >
      {/* Header */}
      <div className="list-header">
        <h2>Users Management</h2>
        <p className="subtitle">Select a user to view their mock interview attempts</p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by username or email..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <span className="user-count">{localUsers.length} users found</span>
      </div>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Users List */}
      {loading ? (
        <div className="loading">Loading users...</div>
      ) : localUsers.length === 0 ? (
        <div className="no-data">
          <FaUser size={48} />
          <p>{searchTerm ? 'No users found matching your search' : 'No users found'}</p>
        </div>
      ) : (
        <div className="users-grid">
          {localUsers.map((user, idx) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="user-card"
              onClick={() => onSelectUser(user)}
            >
              <div className="user-card-header">
                <div className="user-avatar">
                  {user.photoURL ? (
                    <img 
                      src={user.photoURL} 
                      alt={user.displayName || 'User'} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="user-avatar-fallback" 
                    style={{ display: user.photoURL ? 'none' : 'flex' }}
                  >
                    <FaUser size={28} />
                  </div>
                </div>
                <div className="user-info">
                  <h3 className="user-name">{user.displayName || 'Unnamed User'}</h3>
                  <p className="user-email">{user.email}</p>
                  {user.role && user.role !== 'user' && (
                    <span className="user-role-badge">{user.role}</span>
                  )}
                </div>
              </div>

              <div className="user-card-body">
                <div className="user-stat">
                  <span className="stat-label">Joined</span>
                  <span className="stat-value">{formatDate(user.createdAt)}</span>
                </div>
                {user.lastLogin && (
                  <div className="user-stat">
                    <span className="stat-label">Last Login</span>
                    <span className="stat-value">{formatDate(user.lastLogin)}</span>
                  </div>
                )}
              </div>

              <button className="btn-view-attempts">
                View Attempts <FaArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default UserList;