import express from 'express';
import cors from 'cors'; // Import cors
import dotenv from 'dotenv';
import router from './src/routes/geminiRoutes.js';
import handleError from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api/generate', router);

// Error handling middleware
app.use(handleError);

// Route untuk homepage
app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
