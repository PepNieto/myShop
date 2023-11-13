import { Router } from 'express';
import product from './product';
import { getSubsequence } from '../controllers/product';


const router = Router();

// routes
router.use('/product', getSubsequence);
//router.use('/getToken', getToken);

export default router;
