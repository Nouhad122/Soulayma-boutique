import React, { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import './Account.css';

const ProfileOverview = () => {
  // Replace with real user info from context or Redux
  const { userId } = useContext(AuthContext);
  const user = {
    name: 'Nouhad El Hallab',
    email: 'nouhad@example.com',
    avatar: null // You can use a real avatar URL if available
  };
  const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="profile-overview">
      <div className="profile-avatar">{user.avatar ? <img src={user.avatar} alt="avatar" /> : initials}</div>
      <div className="profile-name">{user.name}</div>
      <div className="profile-email">{user.email}</div>
    </div>
  );
};

export default ProfileOverview; 