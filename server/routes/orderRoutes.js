import express from 'express';
import {
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from '../controllers/orderController.js';
import { authenticateJWT, authorizeAdmin } from '../middleware/auth.js';
const router = express.Router();

// Get all orders (admin only)
router.get('/', authenticateJWT, authorizeAdmin, getOrders);

// Get a specific order by ID (admin only)
router.get('/:id', authenticateJWT, authorizeAdmin, getOrderById);

// Update order status (admin only)
router.put('/:id', authenticateJWT, authorizeAdmin, updateOrderStatus);

// Delete an order (admin only)
router.delete('/:id', authenticateJWT, authorizeAdmin, deleteOrder);

export default router;
