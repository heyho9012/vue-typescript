<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <div>{{ str }}</div>
</template>

// vue3 -> root element가 없어도 된다.

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// export default Vue.extend({
//
// });

export default defineComponent({
  // setup() {
  //   const str = ref("");

  //   str.value = "hi";

  //   return { str };
  // },
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      str: "hi",
    };
  },
  methods: {
    changeStr() {
      this.str += "!";
      // this.str = 10;
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
