import { createTest, destroyVM } from '../util';
import Collapse from 'packages/collapse';

describe('Collapse', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Collapse, true);
    expect(vm.$el).to.exist;
  });
});

