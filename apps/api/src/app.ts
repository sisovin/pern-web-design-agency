import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors(
    {
        origin: '*',  // Allow all origins during development
        credentials: true,
    }
));

app.use(express.json());

// Test health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
  console.log('Server is running OK');
});

// Add a test endpoint
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working!',
    timestamp: new Date(),
    clientIp: req.ip
  });
});

export default app;