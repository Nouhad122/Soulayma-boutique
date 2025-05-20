import React from 'react';
import './Admin.css';

const AdminNav = ({ setView, view }) => (
  <div className="admin-nav">
    <h2 className="admin-title">Admin Panel</h2>
    <button className={view === 'dashboard' ? 'admin-nav-btn active' : 'admin-nav-btn'} onClick={() => setView('dashboard')}>Dashboard</button>
    <button className={view === 'products' ? 'admin-nav-btn active' : 'admin-nav-btn'} onClick={() => setView('products')}>Products</button>
    <button className={view === 'orders' ? 'admin-nav-btn active' : 'admin-nav-btn'} onClick={() => setView('orders')}>Orders</button>
    <button className={view === 'users' ? 'admin-nav-btn active' : 'admin-nav-btn'} onClick={() => setView('users')}>Users</button>
    <button className={view === 'actions' ? 'admin-nav-btn active' : 'admin-nav-btn'} onClick={() => setView('actions')}>Actions</button>
  </div>
);

export default AdminNav; 