<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <SearchDocGiaview></SearchDocGiaview>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="alert alert-primary">Thông tin sách mượn</div>
        <SearchSachviewVue/>
      </div>
    </div>
  </section>
  <div class="simple-footer">Copyright &copy; devcong 2018</div>
</template>
<script setup lang="ts">
import SearchDocGiaview from "./SearchDocGiaview.vue";
import SearchSachviewVue from "./SearchSachview.vue";
</script>
<style scoped></style>
