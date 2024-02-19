<template>
  <select class="select-form" v-model="_totalpage" @change="changpage">
    <option selected value="5">5</option>
    <option value="10">10</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</template>
<script setup lang="ts">
import { ref } from "vue";
const _totalpage = ref<number>(5);
const emit = defineEmits<{
  (e: "changpage", index: number): void;
}>();
const changpage = () => {
  emit("changpage", _totalpage.value);
};
</script>
<style scoped>
.select-form {
  appearance: none;
  border: 0;
  outline: 0;
  background: none;
  color: green;
  box-shadow: none;
  font-weight: bold;
  text-align: center;
}
</style>
