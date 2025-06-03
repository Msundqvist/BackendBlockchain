import express from 'express';
import { addBlock, findBlock, listAllBlocks } from '../controllers/blockchain-controller.mjs';

const router = express.Router();

router.route('/').get(listAllBlocks).post(addBlock)

router.route('/:id')
    .get(findBlock)

export default router;