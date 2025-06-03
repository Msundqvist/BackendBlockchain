import BlockchainRepository from "../repository/blockchain-repository.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import Blockchain from '../models/Blockchain.mjs';

const blockchain = new Blockchain()

export const listAllBlocks = catchErrorAsync(async (req, res) => {
    await new BlockchainRepository().listAll();
    res.status(200).json({ success: true, statusCode: 200, data: blockchain })
})

export const addBlock = (req, res) => {
    const { data } = req.body;
    blockchain.addBlock({ data })
    res.status(201).json({ success: true, message: 'New block is added', data: blockchain.chain })
}

export const findBlock = (req, res) => {
    const { id } = req.params;
    const block = blockchain.chain.filter(b => b.hash === id);
    res.status(200).json({ success: true, statusCode: 200, data: block })
}