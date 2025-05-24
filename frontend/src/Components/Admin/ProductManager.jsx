import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const fetchProducts = async () => {
  const response = await fetch(`${'http://localhost:5000/api'}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data.products || [];
};

const deleteProduct = async (productId) => {
  const token = localStorage.getItem('token');
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
    method: 'DELETE',
    headers,
  });
  if (!response.ok) {
    throw new Error('Failed to delete product');
  }
  return response.json();
};

const ProductManager = () => {
  const navigate = useNavigate();
  const { data: products = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await deleteProduct(productId);
      refetch();
    } catch (err) {
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="product-manager">
      <div className="product-manager-header">
        <h3>Manage Products</h3>
        <button className="admin-add-btn" onClick={() => navigate('/add-product')}>Add Product</button>
      </div>
      {isLoading && <p>Loading products...</p>}
      {isError && <p>Error loading products.</p>}
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.color}</td>
              <td>${prod.currentPrice?.toFixed(2) ?? prod.price?.toFixed(2) ?? 0}</td>
              <td>{prod.stock}</td>
              <td>
                <button
                  className="admin-edit-btn"
                  onClick={() => navigate(`/update-product/${prod.id}`)}
                >
                  Edit
                </button>
                <button className="admin-delete-btn" onClick={() => handleDelete(prod.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager; 