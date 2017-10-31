import {createTest, destroyVM} from '../util';
import ELCollapse from 'packages/collapse';

describe(ELCollapse, () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    
    it('create', () => {
        vm = createTest(ELCollapse, true);
        expect(vm.$el).to.be.exist;     
    });
});
