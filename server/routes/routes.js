import express from 'express'
import { heathCheckController,contactMessageController } from '../controller/controller.js'
import { validateUserInput } from '../middleware/zodValidation.js'

const router = express.Router()

router.get('/',heathCheckController)
router.post('/contact', validateUserInput, contactMessageController)

export default router
