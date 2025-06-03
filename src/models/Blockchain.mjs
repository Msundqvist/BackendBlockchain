import { createHash } from "../utilities/hash.mjs"
import Block from "./Block.mjs"
export default class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({ data }) {
        const newBlock = Block.createBlock({ previousBlock: this.chain.at(-1), data })
        this.chain.push(newBlock)
    }

    static isValid(chain) {
        if (JSON.stringify(chain.at(0)) !== JSON.stringify(Block.genesis())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const { timestamp, data, hash, lastHash, nonce, difficulty } = chain.at(i);
            const prevHash = chain[i - 1].hash;

            if (lastHash !== prevHash) return false;

            const validHash = createHash(
                timestamp,
                data,
                lastHash,
                nonce,
                difficulty
            );
            if (hash !== validHash) return false;
        }
        return true;
    }

}