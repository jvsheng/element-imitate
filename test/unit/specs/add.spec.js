const add = require('../../../src/main');

describe('add suit', () => {
    it('add', () => {
        let result = add(1,1);
        expect(result).to.equal(2);
    });
    it('branch', () => {
        let result = add(5, 4);
        expect(result).to.equal(5);
    })

});