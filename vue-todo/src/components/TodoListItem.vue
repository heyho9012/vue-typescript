<template>
  <li>
    <span class="item" :class="{ done: todoItem.done }" @click="toggleItem">{{
      todoItem.title
    }}</span
    ><button type="button" @click="removeItem">del</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Todo } from '../App.vue';

export default Vue.extend({
  props: {
    todoItem: {
      type: Object as PropType<Todo>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    // todoItemClass(): string | null {
    //   return this.todoItem.done ? 'complete' : null;
    // },
  },
  methods: {
    removeItem() {
      this.$emit('remove', this.index);
    },
    toggleItem() {
      this.$emit('toggle', this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  margin-right: 1rem;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
</style>
