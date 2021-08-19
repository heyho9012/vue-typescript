import { RootState } from './state';

const getters = {
  fetchedNews(state: RootState) {
    return state.news;
  },
};

type Getters = typeof getters;

export { Getters, getters };

// export default {
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };
