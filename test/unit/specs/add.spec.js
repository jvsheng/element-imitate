const add = require('../../../src/main');
import {expect} from "chai";

describe('add suit', () => {
    it('add', () => {
        let result = add(1,1);
        expect(result).to.equal(2);
    })
});