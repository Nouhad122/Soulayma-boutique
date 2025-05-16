import React from 'react';
import './Account.css';

const mockOrders = [
  { id: '1001', date: '2024-06-01', status: 'Delivered', total: 68.00 },
  { id: '1000', date: '2024-05-15', status: 'Shipped', total: 44.00 },
];

const OrderHistory = () => (
  <div className="order-history">
    <h3>Order History</h3>
    <table className="order-table">
      <thead>
        <tr>
          <th>Order #</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {mockOrders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
            <td>${order.total.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OrderHistory; 