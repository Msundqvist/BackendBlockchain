import express from 'express';
import { listAllBlocks } from '../controllers/blockchain-controller.mjs';

const router = express.Router();

router.route('/').get(listAllBlocks)

export default router;