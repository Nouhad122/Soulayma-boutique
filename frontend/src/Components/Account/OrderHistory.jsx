import React, { useEffect, useState } from 'react';
import './Account.css';

const OrderHistory = () => {
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
      const response = await fetch('http://localhost:5000/api/orders', { headers });
      const data = await response.json();
      setOrders(data.orders || []);
      setLoading(false);
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading your orders...</div>;

  return (
    <div className="order-history">
      <h3>Order History</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order #</th>
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
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>{order.status}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                <button onClick={() => setSelectedOrder(order)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && (
        <div className="modal-backdrop" onClick={() => setSelectedOrder(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h4>Order Items</h4>
            <table className="order-items-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.productId?.name || item.productId}</td>
                    <td>{item.quantity}</td>
                    <td>${item.productId?.currentPrice?.toFixed(2) || '-'}</td>
                    <td>${((item.productId?.currentPrice || 0) * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setSelectedOrder(null)} className="close-modal-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory; 