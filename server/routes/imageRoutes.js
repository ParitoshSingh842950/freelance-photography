import { Router } from 'express';
import { getImages, createImage } from '../controllers/imageController.js';
import { authenticateJWT, authorizeAdmin } from '../middleware/auth.js';

const router = Router();

router.get('/', getImages);
router.post('/', authenticateJWT, authorizeAdmin, createImage);

export default router;
