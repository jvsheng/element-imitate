import { createTest, destroyVM } from '../util';
import CollapseItem from 'packages/collapse-item';

describe('CollapseItem', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CollapseItem, true);
    expect(vm.$el).to.exist;
  });
});

