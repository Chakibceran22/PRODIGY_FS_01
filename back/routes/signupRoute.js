import express from 'express';
import { createUser } from '../middleware/signup.js';
const router = express.Router();

router.post('/signup', createUser);
export default router;