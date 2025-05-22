import React from 'react';
import './Account.css';

const mockAddresses = [
  { id: 1, name: 'Home', address: '123 Main St, Istanbul, Türkiye' },
  { id: 2, name: 'Work', address: '456 Office Rd, Istanbul, Türkiye' },
];

const AddressBook = () => (
  <div className="address-book">
    <h3>Address Book</h3>
    <div className="address-list">
      <div className="no-addresses-message">
        <p>You haven't added any addresses yet.</p>
        <button className="add-address-btn">Add New Address</button>
      </div>
    </div>
  </div>
);

export default AddressBook; 