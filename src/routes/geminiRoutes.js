import express from 'express';
import generateText from '../controllers/geminiControllers.js'; 

const router = express.Router();

router.post('/generate-text', generateText);
router.get('/text', generateText);


export default router; 