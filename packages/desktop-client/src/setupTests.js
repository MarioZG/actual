import { resetMockStore } from 'loot-core/client/store/mock';

import { installPolyfills } from './polyfills';

installPolyfills();

global.IS_TESTING = true;
global.Actual = {};

vi.mock('react-virtualized-auto-sizer', () => ({
  default: props => {
    return props.children({ height: 1000, width: 600 });
  },
}));

global.Date.now = () => 123456789;

global.__resetWorld = () => {
  resetMockStore();
};

process.on('unhandledRejection', reason => {
  console.error('REJECTION', reason);
});

global.afterEach(() => {
  global.__resetWorld();
});
