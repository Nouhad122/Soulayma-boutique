import React, { useState } from 'react';
import AdminNav from '../../Components/Admin/AdminNav.jsx';
import DashboardStats from '../../Components/Admin/DashboardStats.jsx';
import ProductManager from '../../Components/Admin/ProductManager.jsx';
import OrderManager from '../../Components/Admin/OrderManager.jsx';
import UserManager from '../../Components/Admin/UserManager.jsx';
import AdminActions from '../../Components/Admin/AdminActions.jsx';
import '../../Components/Admin/Admin.css';

const Admin = () => {
  const [view, setView] = useState('dashboard');

  let content;
  if (view === 'dashboard') content = <DashboardStats />;
  else if (view === 'products') content = <ProductManager />;
  else if (view === 'orders') content = <OrderManager />;
  else if (view === 'users') content = <UserManager />;
  else if (view === 'actions') content = <AdminActions />;

  return (
    <div className="admin-container">
      <AdminNav setView={setView} view={view} />
      <div className="admin-main">
        {content}
      </div>
    </div>
  );
};

export default Admin; 