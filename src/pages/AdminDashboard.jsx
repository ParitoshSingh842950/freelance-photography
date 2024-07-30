import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [collections, setCollections] = useState([]);
  const [newCollection, setNewCollection] = useState('');
  const [newImage, setNewImage] = useState({ title: '', url: '', collection: '' });
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchOrders();
    fetchCollections();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data);
    } catch (error) {
      setError('Could not fetch orders');
    }
  };

  const fetchCollections = async () => {
    try {
      const response = await axios.get('/api/collections');
      setCollections(response.data);
    } catch (error) {
      setError('Could not fetch collections');
    }
  };

  const handleNewCollection = async () => {
    try {
      await axios.post('/api/collections', { name: newCollection }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewCollection('');
      fetchCollections();
    } catch (error) {
      setError('Could not create collection');
    }
  };

  const handleNewImage = async () => {
    try {
      await axios.post('/api/images', newImage, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewImage({ title: '', url: '', collection: '' });
      fetchCollections();
    } catch (error) {
      setError('Could not create image');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {error && <p className="error">{error}</p>}
      <section>
        <h3>Orders</h3>
        <ul>
          {orders.map((order) => (
            <li key={order._id}>{order.customerName} - {order.totalAmount}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Add New Collection</h3>
        <input
          type="text"
          value={newCollection}
          onChange={(e) => setNewCollection(e.target.value)}
          placeholder="New Collection Name"
        />
        <button onClick={handleNewCollection}>Add Collection</button>
      </section>
      <section>
        <h3>Add New Image</h3>
        <input
          type="text"
          value={newImage.title}
          onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
          placeholder="Image Title"
        />
        <input
          type="text"
          value={newImage.url}
          onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
          placeholder="Image URL"
        />
        <select
          value={newImage.collection}
          onChange={(e) => setNewImage({ ...newImage, collection: e.target.value })}
        >
          <option value="">Select Collection</option>
          {collections.map((collection) => (
            <option key={collection._id} value={collection._id}>{collection.name}</option>
          ))}
        </select>
        <button onClick={handleNewImage}>Add Image</button>
      </section>
    </div>
  );
};

export default AdminDashboard;
