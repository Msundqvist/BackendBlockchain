import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorHandler.mjs';

dotenv.config({ path: '/config/config.env' });

const app = express();

app.use(express.json());

app.use(errorHandler)

export { app };