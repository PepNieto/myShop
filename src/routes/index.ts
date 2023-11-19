import { Router } from 'express';
import product from './product';
import { generateSubsequences, listSubsequences } from '../controllers/product';
import { getToken } from '../controllers/auth';
import { checkToken } from '../middleware/auth';


const router = Router();

// routes
//router.use('/product', getSubsequence);


router.use('/generateSubsequence', checkToken, (req, res) => {
    generateSubsequences(req, res);
});
router.use('/listSubsequences', checkToken, (req, res) => {
    listSubsequences(req, res);
});
router.use('/getToken', getToken);
//router.use('/getToken', getToken);

export default router;


