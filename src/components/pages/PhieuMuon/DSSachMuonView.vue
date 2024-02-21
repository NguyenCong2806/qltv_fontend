<template>
  <section class="section">
    <div class="section-header">
      <h1>Danh sách sách mượn</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <router-link to="/phieumuon">danh sách sách mượn</router-link>
        </div>
        <div class="breadcrumb-item">
          <router-link to="/phieumuon">phiếu mượn</router-link>
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
            <div class="card-header"></div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="p-0 text-center">
                        <input type="checkbox" />
                      </th>
                      <th>Tên sách</th>
                      <th>Ngày trả</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in chitietphieumuonStore._list"
                      :key="item.id"
                    >
                      <td class="p-0 text-center">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>{{ item.sach.name }}</td>
                      <td>{{ item.ngayTra }}</td>
                      <td>
                        <button v-if="chitietphieumuonStore._list.length>1"
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
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { usechitietphieumuonStore } from "../../../store/ChiTietPhieuMuon";
import { useRoute } from "vue-router";
import swal from "sweetalert";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";

const chitietphieumuonStore = usechitietphieumuonStore();
const route = useRoute();
const loading = async () => {
  await chitietphieumuonStore.getsachphieumuonbyid(route.params.id as string);
};
onMounted(async () => {
  await loading();
});

const del = async (id: string) => {
  const _isdelete = (await swal({
    title: cst.deletemessage as string,
    text: cst.warningmessage,
    icon: cst.iconwarning,
    buttons: ["Hủy bỏ", "Xóa bỏ"],
    dangerMode: true,
  })) as boolean;
  if (_isdelete) {
    await chitietphieumuonStore.delonechitietphieumuon(id);
    if (chitietphieumuonStore._successfully) {
      swal(cst.deletesuccess, {
        icon: cst.iconsuccess,
      });
    }
    if (chitietphieumuonStore._error) {
      toast.error(chitietphieumuonStore._errormessage);
    }
  }
  await loading();
};
</script>
<style scoped></style>
