import { NewsItem } from '@/api';

const state = {
  news: [] as NewsItem[],
  // ask: [],
  // jobs: [],
  // user: {},
  // item: {},
  // list: [],
};

type RootState = typeof state;

export { state, RootState };
