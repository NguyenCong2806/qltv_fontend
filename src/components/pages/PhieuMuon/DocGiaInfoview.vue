<template>
    <div class="card mt-3">
    <div class="card-header">
      <h6>Thông tin chi tiết</h6>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label>Họ và tên</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.name"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.email"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Địa chỉ</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.diaChi"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Ngày sinh</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.ngaySinh"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Hạn sử dụng thẻ</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.hanSuDung"
          readonly
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import docgiavm from "../../../model/docgia/docgiavm";

defineProps<{
    _model: docgiavm;
}>();
</script>
<style scoped lang="scss"></style>
