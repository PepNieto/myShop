import { Router } from 'express'

import { generateSubsequences, listSubsequences } from '../controllers/product'
import { getToken } from '../controllers/auth'
import { checkToken } from '../middleware/auth'

const router = Router()
router.use('/generateSubsequence', checkToken, (req, res) => {
  generateSubsequences(req, res)
})
router.use('/listSubsequences', checkToken, (req, res) => {
  listSubsequences(req, res)
})

router.use('/getToken', getToken)

export default router
