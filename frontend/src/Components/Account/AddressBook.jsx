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
      {mockAddresses.map(addr => (
        <div className="address-card" key={addr.id}>
          <div className="address-name">{addr.name}</div>
          <div className="address-detail">{addr.address}</div>
          <button className="edit-address-btn">Edit</button>
        </div>
      ))}
    </div>
  </div>
);

export default AddressBook; 