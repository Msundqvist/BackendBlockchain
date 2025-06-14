import Storage from '../storage.mjs';
import AppError from '../models/appError.mjs';
import crypto from 'crypto'
export default class BlockchainRepository {
    #storage = undefined

    constructor() {
        this.#storage = new Storage('data', 'blockchain.json')
    }
    async listAll() {
        const blocks = await this.#storage.readFromFile();
        return blocks
    }

    async findBlock(id) {
        const blocks = await this.#storage.readFromFile();
        const block = blocks.find((b) => b.id === id)
        if (!block) throw new AppError(`Vi kunde inte hitta det block du sökte med id ${id}`, 404)
        return block
    }

    async addBlock(block) {
        block.id = crypto.randomUUID().replaceAll('-', '')
        const blocks = await this.#storage.readFromFile();
        blocks.push(block);
        await this.#storage.writeToFile(JSON.stringify(blocks))
        return blocks
    }
}