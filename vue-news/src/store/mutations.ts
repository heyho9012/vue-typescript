import { NewsItem } from '@/api';
import { RootState } from './state';

enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
};

// export default {
// SET_ASK(state, ask) {
//   state.ask = ask;
// },
// SET_JOBS(state, jobs) {
//   state.jobs = jobs;
// },
// SET_USER(state, user) {
//   state.user = user;
// },
// SET_ITEM(state, item) {
//   state.item = item;
// },
// SET_LIST(state, list) {
//   state.list = list;
// },
// };

type Mutations = typeof mutations;

export { MutationTypes, Mutations, mutations };