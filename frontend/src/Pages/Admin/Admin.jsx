import React, { useState } from 'react';
import AdminNav from '../../Components/Admin/AdminNav.jsx';
import DashboardStats from '../../Components/Admin/DashboardStats.jsx';
import ProductManager from '../../Components/Admin/ProductManager.jsx';
import OrderManager from '../../Components/Admin/OrderManager.jsx';
import UserManager from '../../Components/Admin/UserManager.jsx';
import AdminActions from '../../Components/Admin/AdminActions.jsx';
import AdminPaginatedSection from '../../Components/Admin/AdminPaginatedSection.jsx';
import '../../Components/Admin/Admin.css';

const Admin = () => {
  const [view, setView] = useState('dashboard');
  const [productItems, setProductItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const renderMainContent = () => {
    if (view === 'dashboard') return <DashboardStats />;
    if (view === 'users') return <UserManager />;
    if (view === 'actions') return <AdminActions />;
    return null;
  };

  return (
    <div className="admin-container">
      <AdminNav setView={setView} view={view} />

      {view === 'products' && (
        <AdminPaginatedSection items={productItems} resetKey="products">
          {(paginatedProducts) => (
            <ProductManager
              displayProducts={paginatedProducts}
              onProductsChange={setProductItems}
            />
          )}
        </AdminPaginatedSection>
      )}

      {view === 'orders' && (
        <AdminPaginatedSection items={orderItems} resetKey="orders">
          {(paginatedOrders) => (
            <OrderManager
              displayOrders={paginatedOrders}
              onOrdersChange={setOrderItems}
            />
          )}
        </AdminPaginatedSection>
      )}

      {view !== 'products' && view !== 'orders' && (
        <div className="admin-main">
          {renderMainContent()}
        </div>
      )}
    </div>
  );
};

export default Admin;
