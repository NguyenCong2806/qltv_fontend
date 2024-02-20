<template>
  <div class="card mt-3">
    <div class="card-header">
      <h6>Thông tin chi tiết</h6>
    </div>
    <div class="card-body">
      <div
        class="alert alert-secondary"
        v-if="_arrylist"
        v-for="item in _arrylist"
        :key="item.id"
      >
        <div class="alert-body">
          <button
            class="close text-danger"
            data-dismiss="alert"
            @click="deleteitem(item.id)"
          >
            <span>×</span>
          </button>
          Sách:&nbsp;<span class="text-info text-size">{{
            item.name || "No book"
          }}</span
          >&nbsp;&nbsp; Số lượng:&nbsp;<span class="text-info text-size"
            >1</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import sachvm from '../../../model/sach/sachvm';

defineProps<{
    _arrylist: Array<sachvm>;
}>();

const emit = defineEmits<{
  (e: 'deleteitem', id: string): void
}>();
const deleteitem = (id: string) => {
    emit("deleteitem",id);
};
</script>
<style scoped lang="scss"></style>
