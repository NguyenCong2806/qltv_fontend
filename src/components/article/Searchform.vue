<template>
  <div class="card-header-form">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Nhập từ khóa"
        v-model.trim="keyword"
      />
      <div class="input-group-btn">
        <button class="btn btn-primary" @click="search">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const keyword = ref<string>("");

const emit = defineEmits<{
  (e: "search", key: string): void;
}>();
const search = () => {
  emit("search", keyword.value);
};
</script>
<style scoped></style>
