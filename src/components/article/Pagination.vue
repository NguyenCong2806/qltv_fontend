<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <button
          class="page-link"
          @click="next(props.pageNumber - 1)"
          :disabled="props.pageNumber == 1"
        >
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </button>
      </li>
      <li
        class="page-item"
        v-for="item in props.totalPages"
        :key="item"
        :class="{ active: item == props.pageNumber }"
      >
        <button class="page-link" @click="next(item)">{{ item }}</button>
      </li>

      <li class="page-item">
        <button
          class="page-link"
          @click="next(props.pageNumber +1)"
          :disabled="props.pageNumber == props.totalPages"
        >
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </button>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps<{
  pageNumber: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "nextpage", index: number): void;
}>();
const next = (index: number) => {
  emit("nextpage", index);
};
</script>
<style scoped></style>
