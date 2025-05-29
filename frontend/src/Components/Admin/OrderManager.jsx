import React, { useEffect, useState, useContext } from 'react';
import './Admin.css';
import SideCompContext from '../../store/SideCompContext';
import Modal from '../../Components/Secondary-Comps/Modal';

const OrderManager = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [viewingOrder, setViewingOrder] = useState(null);
  const [orderProducts, setOrderProducts] = useState([]);
  const [deletingOrder, setDeletingOrder] = useState(null);
  const { modalContent, showContentInModal, hideContentInModal } = useContext(SideCompContext);

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

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${productId}`);
      const data = await response.json();
      return data.product;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  };

  const handleViewOrder = async (order) => {
    setViewingOrder(order);
    setDeletingOrder(null);
    
    const productDetails = await Promise.all(
      order.items.map(async (item) => {
        const product = await fetchProductDetails(item.productId);
        return {
          ...item,
          product: product || { name: 'Product not found', currentPrice: 0 }
        };
      })
    );
    
    setOrderProducts(productDetails);
    showContentInModal();
  };

  const handleDeleteClick = (order) => {
    setDeletingOrder(order);
    setViewingOrder(null);
    showContentInModal();
  };

  const handleDeleteConfirm = async () => {
    if (!deletingOrder) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/orders/${deletingOrder._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      setOrders(orders.filter(order => order._id !== deletingOrder._id));
      hideContentInModal();
      setDeletingOrder(null);
    } catch (error) {
      console.error('Error deleting order:', error);
      alert('Failed to delete order. Please try again.');
    }
  };

  const renderOrderDetails = () => {
    if (!viewingOrder) return null;
    
    const calculateSubtotal = (price, quantity) => {
      return (price * quantity).toFixed(2);
    };
    
    return (
      <div className="order-details">
        <div className="order-info">
          <p><strong>Order ID:</strong> {viewingOrder._id}</p>
          <p><strong>Customer Email:</strong> {viewingOrder.user.email}</p>
          <p><strong>Date:</strong> {new Date(viewingOrder.createdAt).toLocaleString()}</p>
          <p><strong>Status:</strong> <span className={`order-status ${viewingOrder.status.toLowerCase()}`}>{viewingOrder.status}</span></p>
          <p><strong>Total Amount:</strong> ${viewingOrder.totalAmount.toFixed(2)}</p>
        </div>
        
        <h4>Ordered Items:</h4>
        <table className="order-items-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {orderProducts.map((item, index) => (
              <tr key={index}>
                <td>{item.product.name}</td>
                <td>{item.product.color}</td>
                <td>${item.product.currentPrice?.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>${calculateSubtotal(item.product.currentPrice, item.quantity)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={{ textAlign: 'right' }}><strong>Total:</strong></td>
              <td><strong>${viewingOrder.totalAmount.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

  if (loading) return <div>Loading orders...</div>;

  return (
    <>
      {modalContent && viewingOrder && (
        <Modal
          title="Order Details"
          message={renderOrderDetails()}
          onNeededAction={null}
          closeModal={hideContentInModal}
        />
      )}
      {modalContent && deletingOrder && (
        <Modal
          title="Confirm Delete"
          message={`Are you sure you want to delete order ${deletingOrder._id}? This action cannot be undone.`}
          onNeededAction={handleDeleteConfirm}
          closeModal={() => {
            hideContentInModal();
            setDeletingOrder(null);
          }}
        />
      )}
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
                      className="admin-view-btn"
                      onClick={() => handleViewOrder(order)}
                    >
                      View
                    </button>
                    <button 
                      className="admin-delete-btn"
                      onClick={() => handleDeleteClick(order)}
                    >
                      Delete
                    </button>
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
    </>
  );
};

export default OrderManager; 