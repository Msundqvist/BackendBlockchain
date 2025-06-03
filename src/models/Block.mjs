import { MINE_RATE } from "../utilities/config.mjs";
import { GENESIS_BLOCK } from "./Genesis.mjs";


export default class Block {
    constructor({ timestamp, hash, lastHash, data, nonce, difficulty }) {
        this.timestamp = timestamp;
        this.hash = hash;
        this.lastHash = lastHash;
        this.data = data;
        this.nonce = nonce
        this.difficulty = difficulty
    }

    static genesis() {
        return new this(GENESIS_BLOCK)
    }

    static adjustDifficultyLevel({ block, timestamp }) {
        const { difficulty } = block;

        if (difficulty < 1) return 1;

        if (timestamp - block.timestamp > MINE_RATE) {
            return difficulty - 1
        }
        return difficulty + 1


    }
}