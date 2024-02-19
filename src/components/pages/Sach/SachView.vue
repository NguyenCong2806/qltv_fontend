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
          <!-- <SelectTotalPage @changpage="changtotalpage" /> -->
          bản ghi / 1 trang
        </h6>
        <RouterLink to="/taosach" class="btn btn-icon icon-left btn-primary">
          <span class="ion-plus-round"> </span>
          Thêm mới
        </RouterLink>
        <!-- <searchform @search="searchdata"></searchform> -->
      </div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
        <div class="col-12 col-sm-6 col-md-3 col-lg-2">
          <div class="card">
            <img :src="_img" class="card-img-top" alt="anh" />
            <div class="card-body">
              <h5 class="card-title">Tên sách</h5>
              <div class="card-text">
                <p>Tác giả:</p>
                <p>Thể loại:</p>
                <p>Nhà xuất bản:</p>
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
  <pagination :page-number="1" :total-pages="10"></pagination>
  <!-- <Loading v-if="!nhaxuatbanStore._isloading" /> -->
</template>
<script setup lang="ts">
// import Searchform from "../../article/Searchform.vue";
// import searchParameters from "../../../model/SearchParameter";
// import SelectTotalPage from "../../article/SelectTotalPage.vue";
import Pagination from "../../article/Pagination.vue";
// import Loading from "../../article/Loading.vue";
const _img = "img/news/img12.jpg";
</script>
<style scoped></style>
