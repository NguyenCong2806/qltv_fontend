<template>
  <section class="section">
    <div class="section-header">
      <h1>Nhà Xuất Bản</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <router-link to="/nhaxuatban">Nhà xuất bản</router-link>
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
                bản ghi / 1 trang
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
                      <th>nhà xuất bản</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in nhaxuatbanStore._datalist.results"
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
        :page-number="nhaxuatbanStore._datalist.pageNumber"
        :total-pages="nhaxuatbanStore._datalist.totalPages"
        @nextpage="nextpage"
      ></pagination>
      <Loading v-if="!nhaxuatbanStore._isloading" />
    </div>
  </section>
  <modalnxb-view
    v-if="_isOpen" @close="Close" @save="save" :modaltitel="_modaltitel"
    ></modalnxb-view
  >
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usenhaxuatbanStore } from "../../../store/NhaXuatBan";
import Loading from "../../article/Loading.vue";
import searchParameters from "../../../model/SearchParameter";
import Pagination from "../../article/Pagination.vue";
import Searchform from "../../article/Searchform.vue";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";
import swal from "sweetalert";
import SelectTotalPage from "../../article/SelectTotalPage.vue";
import ModalnxbView from "../../pages/NhaXuatBan/ModalnxbView.vue";

const nhaxuatbanStore = usenhaxuatbanStore();

var model = new searchParameters();
const _isOpen = ref<boolean>(false);
const _modaltitel = ref<string>("");

onMounted(async () => {
  await loading(model);
});
const loading = async (data: searchParameters) => {
  await nhaxuatbanStore.getallnhaxuatbans(data);
};
const Open = () => {
  _isOpen.value = true;
  _modaltitel.value = "Thêm mới nhà xuất bản!";
  nhaxuatbanStore.getdefaultnhaxuatban();
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
  _modaltitel.value = "Chỉnh sửa nhà xuất bản!";
  await nhaxuatbanStore.getnhaxuatbanbyid(id);
  _isOpen.value = true;
};
const save = async (data: nhaxuatbanvm) => {
  if (data.id == cst.defaultid) {
    await nhaxuatbanStore.addnhaxuatban(data);
  } else {
    await nhaxuatbanStore.editnhaxuatban(data);
  }

  if (nhaxuatbanStore._successfully) {
    toast.success(
      data.id == cst.defaultid ? cst.addsuccess : cst.updatesuccess
    );
  }
  if (nhaxuatbanStore._error) {
    toast.error(nhaxuatbanStore._errormessage);
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
    await nhaxuatbanStore.delnhaxuatban(id);
    if (nhaxuatbanStore._successfully) {
      swal(cst.deletesuccess, {
        icon: cst.iconsuccess,
      });
    }
    if (nhaxuatbanStore._error) {
      toast.error(nhaxuatbanStore._errormessage);
    }
  }
  await loading(model);
};
</script>
<style scoped></style>
