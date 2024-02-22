<template>
  <section class="section">
    <div class="section-header">
      <h1>Tài khoản</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <router-link to="/taikhoan">tài khoản</router-link>
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
              <router-link to="/taotaikhoan"
                class="btn btn-icon icon-left btn-primary"
              >
                <span class="ion-plus-round"> </span>
                Thêm mới
              </router-link>
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
                      <th>Họ và tên</th>
                      <th>Tuổi</th>
                      <th>Email</th>
                      <th>Ngày sinh</th>
                      <th>Giới tính</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in userStore._datalist.results"
                      :key="item.id"
                    >
                      <td class="p-0 text-center">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.age }}</td>
                      <td>{{ item.email }}</td>
                      <td>
                        {{ format(item.birthday || new Date(), "dd/MM/yyyy") }}
                      </td>
                      <td>{{ item.sex ? "Nam" : "Nữ" }}</td>
                      <td>
                        <RouterLink :to="{ name: 'suataikhoan', params: { id: item.id }}"
                          class="btn btn-icon btn-primary"
                          @click="getbyid(item.id.toString())"
                        >
                          <i class="far fa-edit"></i>
                        </RouterLink>
                        &nbsp;
                        <button
                          class="btn btn-icon btn-danger"
                          @click="del(item.id.toString())"
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
        :page-number="userStore._datalist.pageNumber"
        :total-pages="userStore._datalist.totalPages"
        @nextpage="nextpage"
      ></pagination>
      <Loading v-if="!userStore._isloading" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useuserStore } from "../../../store/User";
import Loading from "../../article/Loading.vue";
import searchParameters from "../../../model/SearchParameter";
import Pagination from "../../article/Pagination.vue";
import Searchform from "../../article/Searchform.vue";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";
import swal from "sweetalert";
import SelectTotalPage from "../../article/SelectTotalPage.vue";
import { format } from "date-fns";

const userStore = useuserStore();
var model = new searchParameters();

onMounted(async () => {
  await loading(model);
  userStore.getdefaultuser();
});
const loading = async (data: searchParameters) => {
  await userStore.getallusers(data);
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
const getbyid = async (id: string) => {
  await userStore.getuserbyid(id);
};
const del = async (id: string) => {
  const _isdelete = (await swal({
    title: cst.deletemessage as string,
    text: cst.warningmessage,
    icon: cst.iconwarning,
    buttons: ["Hủy bỏ", "Xóa bỏ"],
    dangerMode: true,
  })) as boolean;
  if (_isdelete) {
    await userStore.deluser(id);
    if (userStore._successfully) {
      swal(cst.deletesuccess, {
        icon: cst.iconsuccess,
      });
    }
    if (userStore._error) {
      toast.error(userStore._errormessage);
    }
  }
  await loading(model);
};
</script>
<style scoped></style>
