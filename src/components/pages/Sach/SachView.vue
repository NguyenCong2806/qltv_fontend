<template>
  <section class="section">
    <div class="section-header">
      <h1>Sách</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <router-link to="/sach">sách</router-link>
        </div>
        <div class="breadcrumb-item">
          <router-link to="/">hệ thống</router-link>
        </div>
        <div class="breadcrumb-item">qltv</div>
      </div>
    </div>
    <div class="section-body">
      <div class="card-header mb-3">
        <h6>
          Hiện thị:
          <SelectTotalPage @changpage="changtotalpage" />
          bản ghi / 1 trang
        </h6>
        <RouterLink to="/taosach" class="btn btn-icon icon-left btn-primary">
          <span class="ion-plus-round"> </span>
          Thêm mới
        </RouterLink>
        <searchform @search="searchdata"></searchform>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-3 col-lg-2"
          v-for="item in sachStore._datalist.results"
          :key="item.id"
        >
          <div class="card">
            <div class="card-img">
              <img class="box_img" :src="fomat_url(item.anhBia)"  alt="anh" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <div class="card-text">
                <p>
                  Tác giả: <span>{{ item.author }}</span>
                </p>
                <p>
                  Thể loại: <span>{{ item.loaiSach.name }}</span>
                </p>
                <p>
                  Nhà xuất bản: <span>{{ item.nhaXuatBan.name }}</span>
                </p>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <a href="#" class="btn btn-primary">
                  <span class="ion-information-circled"> Chi tiết</span>
                </a>
                <a href="#" class="btn btn-danger">
                  <span class="ion-close-round"> Xóa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <pagination
    :page-number="sachStore._datalist.pageNumber"
    :total-pages="sachStore._datalist.totalPages"
    @nextpage="nextpage"
  >
  </pagination>
  <Loading v-if="!sachStore._isloading" />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Searchform from "../../article/Searchform.vue";
import searchParameters from "../../../model/SearchParameter";
import SelectTotalPage from "../../article/SelectTotalPage.vue";
import Pagination from "../../article/Pagination.vue";
import Loading from "../../article/Loading.vue";
import { usesachStore } from "../../../store/Sach";
import { cst } from "../../../utils/common/constcommon";

var model = new searchParameters();
const sachStore = usesachStore();

onMounted(async () => {
  await loading(model);
});
const changtotalpage = async (totalpage: number) => {
  model.totalnumber = totalpage;
  model.number = cst.pagenumber;
  await loading(model);
};
const searchdata = async (keyword: string) => {
  model.keywork = keyword;
  await loading(model);
};
const nextpage = async (index: number) => {
  model.number = index;
  await loading(model);
};
const loading = async (data: searchParameters) => {
  await sachStore.getallsachs(data);
};
var url_file: string = import.meta.env.VITE_API_FILE;
const fomat_url = (img: string) => {
  return url_file + img;
};
</script>
<style scoped>
.card-img{
  width: 100%;
  height: auto;
  overflow: hidden;
}
.box_img{
  width: 100%;
  height: 250px;
  object-fit: contain;
}
</style>
