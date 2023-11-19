import { Router } from 'express';
import product from './product';
import { createSubsequence, generateSubsequences, getSubsequence, listSubsequences } from '../controllers/product';
import { getToken } from '../controllers/auth';


const router = Router();

// routes
//router.use('/product', getSubsequence);
router.use('/getSubsequence', getSubsequence);
router.use('/generateSubSequence', generateSubsequences);
router.use('/createSubSequence', createSubsequence);
router.use('/listSubsequences', listSubsequences);
router.use('/getToken', getToken);
//router.use('/getToken', getToken);

export default router;


