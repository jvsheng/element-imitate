import {createTest, destroyVM} from '../util';
import ElCollapse from 'packages/collapse';

describe(ElCollapse, () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });

    it('create', () => {
        vm = createTest(ElCollapse, true);
        expect(vm.$el).to.be.exist;
    });
});
