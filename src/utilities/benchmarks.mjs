import Blockchain from "../models/Blockchain.mjs";

const blockchain = new Blockchain();
const times = [];
let prevTime, nextTime, nextBlock, timeDiff, average, hash;

for (let i = 0; i < 10000; i++) {
    prevTime = blockchain.chain.at(-1).timestamp;

    blockchain.addBlock({ data: `Test block ${i}` });

    nextBlock = blockchain.chain.at(-1);

    nextTime = nextBlock.timestamp;

    hash = nextBlock.hash;

    timeDiff = nextTime - prevTime;

    times.push(timeDiff);

    average = times.reduce((sum, value) => sum + value) / times.length;

}