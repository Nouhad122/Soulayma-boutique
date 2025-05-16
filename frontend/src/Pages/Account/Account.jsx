import React from 'react';
import ProfileOverview from '../../Components/Account/ProfileOverview';
import OrderHistory from '../../Components/Account/OrderHistory';
import AddressBook from '../../Components/Account/AddressBook';
import AccountActions from '../../Components/Account/AccountActions';
import '../../Components/Account/Account.css';

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-sidebar">
        <ProfileOverview />
        <AccountActions />
      </div>
      <div className="account-main">
        <OrderHistory />
        <AddressBook />
      </div>
    </div>
  );
};

export default Account; 