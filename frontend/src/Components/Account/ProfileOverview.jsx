import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../store/AuthContext';
import './Account.css';

const ProfileOverview = () => {
  const { userId, token } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    avatar: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        const user = data.user;
        setUserData({
          name: `${user.firstname} ${user.lastname}`.trim(),
          email: user.email,
          avatar: null
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (userId && token) {
      fetchUserData();
    }
  }, [userId, token]);

  if (isLoading) {
    return <div className="profile-overview">Loading...</div>;
  }

  if (error) {
    return <div className="profile-overview">Error: {error}</div>;
  }

  const initials = userData.name ? userData.name.split(' ').map(n => n[0]).join('').toUpperCase() : '';

  return (
    <div className="profile-overview">
      <div className="profile-avatar">{userData.avatar ? <img src={userData.avatar} alt="avatar" /> : initials}</div>
      <div className="profile-name">{userData.name}</div>
      <div className="profile-email">{userData.email}</div>
    </div>
  );
};

export default ProfileOverview; 