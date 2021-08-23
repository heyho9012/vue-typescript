import { VueConstructor } from "vue";

type MyVue<T> = VueConstructor<Vue & T>;
type MyVueRefs<T> = VueConstructor<Vue & { $refs: T }>;

export { MyVue, MyVueRefs };
