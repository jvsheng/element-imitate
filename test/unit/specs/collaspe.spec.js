import {createTest, destoryVM} from '../util'
import ELCollaspe from 'packages/collaspe'

describe(ELCollaspe, () => {
    let vm;
    afterEach(() => {
        destoryVM(vm);
    });
    
    it('create', () => {
        createTest(ELCollaspe, true);
        expect(vm.$el).to.exist;
    });
});
