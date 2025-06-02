import BlockchainRepository from "../repository/blockchain-repository.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";

export const listAllBlocks = catchErrorAsync(async (req, res) => {
    const blocks = await new BlockchainRepository().listAll();
    res.status(200).json({ success: true, statusCode: 200, data: blocks })
}) 