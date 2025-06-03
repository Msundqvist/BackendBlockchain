import Storage from '../storage.mjs';
import AppError from '../models/appError.mjs';
export default class BlockchainRepository {
    #storage = undefined

    constructor() {
        this.#storage = new Storage('data', 'blockchain.json')
    }
    async listAll() {
        const blocks = await this.#storage.readFromFile();
        return blocks
    }

    findBlock() {
        const blocks = this.#storage.readFromFile();
        const block = blocks.find((b) => b.id === id)
        if (!block) throw new AppError(`Vi kunde inte hitta det block du sökte med id ${id}`, 404)
        return block
    }

    async addBlock(block) {
        const blocks = await this.#storage.readFromFile();
        blocks.push(block);
        await this.#storage.writeToFile(JSON.stringify(blocks))
        return block
    }
}