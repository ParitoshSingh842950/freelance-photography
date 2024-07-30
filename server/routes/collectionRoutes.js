import { Router } from 'express';
import { getCollections, createCollection } from '../controllers/collectionController.js';
import { authenticateJWT, authorizeAdmin } from '../middleware/auth.js';

const router = Router();

router.get('/', getCollections);
router.post('/', authenticateJWT, authorizeAdmin, createCollection);

export default router;
