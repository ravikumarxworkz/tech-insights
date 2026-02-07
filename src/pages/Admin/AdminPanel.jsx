// src/pages/Admin/AdminPanel.jsx
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserList from './UserList';
import UserMockAttempts from './UserMockAttempts';
import { FaShieldAlt, FaArrowLeft } from 'react-icons/fa';
import './AdminPanel.css';

const AdminPanel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  // Check if user is admin by role
  const isAdmin = user?.role === 'admin';

  if (!user) {
    navigate('/');
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="admin-access-denied">
        <div className="denied-container">
          <FaShieldAlt size={64} />
          <h1>Access Denied</h1>
          <p>You do not have permission to access the admin panel.</p>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af', marginTop: '1rem' }}>
            Only users with admin role can access this panel.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      {/* Header */}
      <header className="admin-header">
        <div className="admin-header-content">
          <div className="admin-title">
            <FaShieldAlt size={28} />
            <h1>Admin Panel</h1>
          </div>
          <button
            className="btn-back-home"
            onClick={() => navigate('/')}
            title="Go back to home"
          >
            <FaArrowLeft /> Back to Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="admin-main">
        {!selectedUser ? (
          <UserList 
            onSelectUser={setSelectedUser} 
            users={allUsers}
            setUsers={setAllUsers}
          />
        ) : (
          <UserMockAttempts
            user={selectedUser}
            users={allUsers}
            onBack={() => setSelectedUser(null)}
          />
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
