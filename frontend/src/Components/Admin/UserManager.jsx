import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import AuthContext from '../../store/AuthContext';
import './Admin.css';

const fetchUsers = async (token) => {
  const response = await fetch('http://localhost:5000/api/users', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();
  return data.users || [];
};

const UserManager = () => {
  const { token } = useContext(AuthContext);
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ['users', token],
    queryFn: () => fetchUsers(token),
    enabled: !!token
  });

  return (
    <div className="user-manager">
      <h3>Manage Users</h3>
      {isLoading && <p>Loading users...</p>}
      {isError && <p>Error loading users.</p>}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstname} {user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.role || 'user'}</td>
              <td>
                <button className="admin-edit-btn">View</button>
                <button className="admin-edit-btn">Change Role</button>
                <button className="admin-delete-btn">Deactivate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManager; 