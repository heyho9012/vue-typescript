<template>
  <div class="input_box">
    <label for="todo-input">오늘 할 일 : </label>
    <input type="text" id="todo-input" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { VueEvent } from '@/types';

export default Vue.extend({
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event: VueEvent.Input<HTMLInputElement>) {
      // if (!event.target) {
      //   return;
      // }
      // const eventTarget = event.target as HTMLInputElement;
      this.$emit('input', event.target.value);
    },
    addTodo() {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
