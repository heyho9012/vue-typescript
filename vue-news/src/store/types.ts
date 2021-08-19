import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { Mutations } from './mutations';
import { Actions } from './actions';
import { RootState } from './state';
import { Getters } from './getters';

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

type MyStore = Omit<Store<RootState>, 'commit' | 'dispatch' | 'getters'> &
  MyMutations &
  MyActions &
  MyGetters;

export { MyStore };
