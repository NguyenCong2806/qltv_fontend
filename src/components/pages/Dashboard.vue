<template>
  <section class="section">
    <div class="section-header">
      <h1>Hệ thống</h1>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-primary">
            <i class="far fa-user"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Số sách</h4>
            </div>
            <div class="card-body">{{ mainStore._dataitem.sachnumber }}</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-danger">
            <i class="far fa-newspaper"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Số độc giả</h4>
            </div>
            <div class="card-body">{{ mainStore._dataitem.docgianumber }}</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-warning">
            <i class="far fa-file"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Số phiếu mượn</h4>
            </div>
            <div class="card-body">{{ mainStore._dataitem.phieumuonnumber }}</div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 col-12">
        <div class="card card-statistic-1">
          <div class="card-icon bg-success">
            <i class="fas fa-circle"></i>
          </div>
          <div class="card-wrap">
            <div class="card-header">
              <h4>Số phiếu trả</h4>
            </div>
            <div class="card-body">{{ mainStore._dataitem.phieutranumber }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { usemainStore } from '../../store/main';
import { onMounted } from "vue";

const mainStore = usemainStore();

onMounted(async () => {
  await loading();
});
const loading = async () => {
  await mainStore.getallmains();
};
</script>
<style scoped></style>
