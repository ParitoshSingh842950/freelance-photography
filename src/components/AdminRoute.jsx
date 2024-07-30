import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser && currentUser.email === 'admin@example.com' ? children : <Navigate to="/login" />;
};

export default AdminRoute;
