import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './Admin.css';

const fetchUserCount = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/count`);
  if (!response.ok) {
    throw new Error('Failed to fetch user count');
  }
  const data = await response.json();
  return data.count;
};

const fetchProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products || [];
};

const fetchOrders = async () => {
  const token = localStorage.getItem('token');
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/orders/all`, { headers });
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  const data = await response.json();
  return data.orders || [];
};

const DashboardStats = () => {
  const { data: userCount, isLoading: isLoadingUsers } = useQuery({
    queryKey: ['userCount'],
    queryFn: fetchUserCount
  });

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const { data: orders, isLoading: isLoadingOrders, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders
  });

  const totalRevenue = orders && orders.length
    ? orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0)
    : 0;

  const stats = [
    { label: 'Orders', value: isLoadingOrders || !orders ? '...' : orders.length, icon: '📦' },
    { label: 'Users', value: isLoadingUsers ? '...' : userCount, icon: '👤' },
    { label: 'Products', value: isLoadingProducts ? '...' : products.length, icon: '🛍️' },
    { label: 'Revenue', value: isLoadingOrders || !orders ? '...' : `$${totalRevenue.toFixed(2)}`, icon: '💰' },
  ];

  return (
    <div className="dashboard-stats">
      <h3>Dashboard Overview</h3>
      {isError && <div style={{color: 'red'}}>Failed to load orders. Please login as admin.</div>}
      <div className="stats-cards">
        {stats.map(stat => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats; 