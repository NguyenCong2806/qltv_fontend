<template>
  <section class="section">
    <div class="section-header">
      <h1>Loại sách</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <router-link to="/loaisach">loại sách</router-link>
        </div>
        <div class="breadcrumb-item">
          <router-link to="/">hệ thống</router-link>
        </div>
        <div class="breadcrumb-item">qltv</div>
      </div>
    </div>

    <div class="section-body">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4>
                Hiện thị:
                <SelectTotalPage @changpage="changtotalpage" />
                bản ghi /
                1 trang
              </h4>
              <searchform @search="searchdata"></searchform>
              <button class="btn btn-icon icon-left btn-primary" @click="Open">
                <span class="ion-plus-round"> </span>
                Thêm mới
              </button>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="p-0 text-center">
                        <input type="checkbox" />
                      </th>
                      <th>Id</th>
                      <th>Tên thể loạn</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in loaiSachStore._datalist.results"
                      :key="item.id"
                    >
                      <td class="p-0 text-center">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>
                        <button
                          class="btn btn-icon btn-primary"
                          @click="getbyid(item.id)"
                        >
                          <i class="far fa-edit"></i>
                        </button>
                        &nbsp;
                        <button
                          class="btn btn-icon btn-danger"
                          @click="del(item.id)"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination
        :page-number="loaiSachStore._datalist.pageNumber"
        :total-pages="loaiSachStore._datalist.totalPages"
        @nextpage="nextpage"
      ></pagination>
      <Loading v-if="!loaiSachStore._isloading" />
    </div>
  </section>
  <modal-loai-sach-view
    v-if="_isOpen"
    @close="Close"
    @save="save"
    :modaltitel="_modaltitel"
  ></modal-loai-sach-view>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useloaiSachStore } from "../../../store/LoaiSach";
import Loading from "../../article/Loading.vue";
import searchParameters from "../../../model/SearchParameter";
import Pagination from "../../article/Pagination.vue";
import Searchform from "../../article/Searchform.vue";
import ModalLoaiSachView from "../../pages/LoaiSach/ModalLoaiSachView.vue";
import loaisachvm from "../../../model/loaisach/loaisachvm";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";
import swal from "sweetalert";
import SelectTotalPage from "../../article/SelectTotalPage.vue";

const loaiSachStore = useloaiSachStore();
var model = new searchParameters();
const _isOpen = ref<boolean>(false);
const _modaltitel = ref<string>("");

onMounted(async () => {
  await loading(model);
});
const loading = async (data: searchParameters) => {
  await loaiSachStore.getallloaisachs(data);
};
const Open = () => {
  _isOpen.value = true;
  _modaltitel.value = "Thêm mới loại sách!";
  loaiSachStore.getdefaultloaisach();
};
const Close = () => {
  _isOpen.value = false;
};
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
const getbyid = async (id: number) => {
  _modaltitel.value = "Chỉnh sửa loại sách!";
  await loaiSachStore.getloaisachbyid(id);
  _isOpen.value = true;
};
const save = async (data: loaisachvm) => {
  if (data.id == cst.defaultid) {
    await loaiSachStore.addloaisach(data);
  } else {
    await loaiSachStore.editloaisach(data);
  }

  if (loaiSachStore._successfully) {
    toast.success(
      data.id == cst.defaultid ? cst.addsuccess : cst.updatesuccess
    );
  }
  if (loaiSachStore._error) {
    toast.error(loaiSachStore._errormessage);
  }
  _isOpen.value = false;
  await loading(model);
};
const del = async (id: number) => {
  const _isdelete = (await swal({
    title: cst.deletemessage as string,
    text: cst.warningmessage,
    icon: cst.iconwarning,
    buttons: ["Hủy bỏ", "Xóa bỏ"],
    dangerMode: true,
  })) as boolean;
  if (_isdelete) {
    await loaiSachStore.delloaisach(id);
    if (loaiSachStore._successfully) {
      swal(cst.deletesuccess, {
        icon: cst.iconsuccess,
      });
    }
    if (loaiSachStore._error) {
      toast.error(loaiSachStore._errormessage);
    }
  }
  await loading(model);
};
</script>
<style scoped></style>
