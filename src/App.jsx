import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import CheckoutForm from './pages/CheckoutForm';
import Collection from './pages/Collection';
import Author from './pages/Author';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Adanna from './pages/Adanna';
import Options from './pages/Options';
import Exhibitions from './pages/Exhibitions';
import Travel from './pages/Travel';
import Prints from './pages/Prints';
import Modal from './components/Modal';
import ProtectedComponent from './pages/ProtectedComponent'; // Import ProtectedComponent

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

const stripePromise = loadStripe('pk_test_51PhqHLRwmX97BtKnooNSDbgUIPQhkpuL6KRiOP8AkdnUdVi3Q6NqEJXC70x1RURo2emGi4jRtYwiyjrI4IFi2gMo00Rvvgi1b6');

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/adanna-eleje" element={<Adanna />} />
              <Route path="/options" element={<Options />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/exhibition" element={<Exhibitions />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/author" element={<Author />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/prints" element={<Prints />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route
                path="/checkout"
                element={
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                }
              />
              <Route
                path="/admin-dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="/protected"
                element={
                  <PrivateRoute>
                    <ProtectedComponent />
                  </PrivateRoute>
                }
              />
            </Routes>
            <Modal />
          </Router>
        </CartProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
