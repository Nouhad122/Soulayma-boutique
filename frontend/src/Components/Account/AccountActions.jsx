import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import './Account.css';

const AccountActions = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="account-actions">
      <button className="account-action-btn">Change Password</button>
      <button className="account-action-btn" onClick={logout}>Log Out</button>
    </div>
  );
};

export default AccountActions; 