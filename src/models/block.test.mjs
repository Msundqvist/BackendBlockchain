import { describe, expect } from "vitest";
import Block
    from "./Block.mjs";

describe('Bloc', () => {
    //add dummy data...
    const id = 'id'
    const block = new Block(id)

    describe('should have the right propery', () => {
        it('should have a id propery', () => {
            expect(block).toHaveProperty('id')
        })
    })

})
