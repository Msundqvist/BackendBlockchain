import BlockchainRepository from "../repository/blockchain-repository.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";
import Blockchain from '../models/Blockchain.mjs';


export const listAllBlocks = catchErrorAsync(async (req, res) => {
    const blockchain = await new BlockchainRepository().listAll();
    res.status(200).json({ success: true, statusCode: 200, data: blockchain })
})

export const addBlock = catchErrorAsync(async (req, res) => {
    const data = req.body;
    const block = await new BlockchainRepository().addBlock(data)

    res.status(201).json({ success: true, message: 'New block is added', data: block })
})

export const findBlock = catchErrorAsync(async (req, res) => {
    const { id } = req.params;
    const block = await new BlockchainRepository().findBlock(id)
    res.status(200).json({ success: true, statusCode: 200, data: block })
})