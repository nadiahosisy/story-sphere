// DonateForm.js

import React, { useState } from 'react';

const DonateForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your donation submission logic here
    console.log('Donation submitted:', { amount, name, email });
    // You can send this data to your server or perform any other actions
  };

  return (
    <div className="donate-form">
      <h2 className="title">Donate Now</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Donation Amount ($):</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonateForm;
