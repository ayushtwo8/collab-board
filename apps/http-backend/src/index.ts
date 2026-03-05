import dotenv from 'dotenv'
dotenv.config();

import express from 'express'

import authRoutes from './routes/authRoute.js'
import roomRoutes from './routes/roomRoute.js'

const app = express();

app.use(express());

app.get('/health', (req, res) => {
    res.send("Healthy")
});

app.use('/api/v1', authRoutes);
app.use('/api/v1', roomRoutes);

app.listen(5000);