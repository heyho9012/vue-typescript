import { VueConstructor } from "vue/types/umd";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  install(Vue: VueConstructor) {
    Vue.prototype.$_Chart = Chart;
  },
};

// App.vue
// new this.$_Chart();
