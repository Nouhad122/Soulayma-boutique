import React, { useEffect, useState } from 'react';
import './Admin.css';

const OrderManager = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const headers = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/orders/all`, { headers });
      const data = await response.json();
      setOrders(data.orders || []);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order._id === orderId ? { ...order, status: newStatus } : order
    ));
    setSelectedOrder(null);
  };

  if (loading) return <div>Loading orders...</div>;

  return (
    <div className="order-manager">
      <h3>Manage Orders</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Email</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user.email}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                <div className="status-update-container">
                  <button 
                    className="admin-edit-btn"
                    onClick={() => setSelectedOrder(selectedOrder === order._id ? null : order._id)}
                  >
                    Update Status
                  </button>
                  {selectedOrder === order._id && (
                    <div className="status-dropdown">
                      <button 
                        onClick={() => handleStatusUpdate(order._id, 'Pending')}
                        className={order.status === 'Pending' ? 'active' : ''}
                      >
                        Pending
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(order._id, 'Processing')}
                        className={order.status === 'Processing' ? 'active' : ''}
                      >
                        Processing
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(order._id, 'Delivered')}
                        className={order.status === 'Delivered' ? 'active' : ''}
                      >
                        Delivered
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManager; 