// src/utils/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getAuthHeaders = () => ({
  headers: {
    Authorization: localStorage.getItem('token'), // Assuming token is stored in localStorage
  },
});

export const fetchOrders = async () => {
  const response = await axios.get(`${API_URL}/orders`, getAuthHeaders());
  return response.data;
};

export const fetchCollections = async () => {
  const response = await axios.get(`${API_URL}/collections`);
  return response.data;
};

export const addNewCollection = async (collection) => {
  await axios.post(`${API_URL}/collections`, collection, getAuthHeaders());
};

export const addNewImage = async (image) => {
  await axios.post(`${API_URL}/images`, image, getAuthHeaders());
};
