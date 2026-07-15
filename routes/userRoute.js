import { createUser, getUsers, getUserByName } from '../controllers/userController.js';
import Router from 'express';

const router = Router();

router.post('/create', createUser);
router.get('/get', getUsers);
router.get('/get/:username', getUserByName);

export default router;