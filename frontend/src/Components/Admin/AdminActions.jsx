import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import './Admin.css';

const AdminActions = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="admin-actions">
      <button className="admin-action-btn">Change Password</button>
      <button className="admin-action-btn" onClick={logout}>Log Out</button>
    </div>
  );
};

export default AdminActions; 