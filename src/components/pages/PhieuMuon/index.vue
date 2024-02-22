<template>
  <section class="section">
    <div class="section-header">
      <h1>Danh sách phiếu mượn</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
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
                      <th>Mã phiếu mượn</th>
                      <th>Tên độc giả</th>
                      <th>Email độc giả</th>
                      <th>Địa chỉ độc giả</th>
                      <th>Ngày mượn</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in phieuMuonStore._datalist.results"
                      :key="item.id"
                    >
                      <td class="p-0 text-center">
                        <div class="custom-checkbox custom-control">
                          <input type="checkbox" />
                        </div>
                      </td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.docGia.name }}</td>
                      <td>{{ item.docGia.email }}</td>
                      <td>{{ item.docGia.diaChi }}</td>
                      <td>{{ item.ngayMuon}}</td>
                      <td>
                        <RouterLink :to="{ name: 'chitietphieumuon', params: { id:item.id }}"
                          class="btn btn-icon btn-primary"
                        >
                          <i class="far fa-edit"></i>
                        </RouterLink>
                        &nbsp;
                        <button class="btn btn-icon btn-info" @click="tra(item.id)">
                          <i class="fas fa-edit"></i>
                        </button>
                        &nbsp;
                        <button class="btn btn-icon btn-danger" @click="del(item.id)">
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
import searchParameters from "../../../model/SearchParameter";
import { usephieumuonStore } from "../../../store/PhieuMuon";
import { cst } from "../../../utils/common/constcommon";
import swal from "sweetalert";
import { usechitietphieumuonStore } from "../../../store/ChiTietPhieuMuon";
import { toast } from "vue3-toastify";
import { usephieutraStore } from "../../../store/phieutra";
import phieutravm from "../../../model/phieutra/phieutravm";
import { Guid } from "guid-typescript";

const phieuMuonStore = usephieumuonStore();
const chitietphieumuonStore = usechitietphieumuonStore();
const phieutraStore = usephieutraStore();

var model = new searchParameters();

onMounted(async () => {
  await loading(model);
});
const loading = async (data: searchParameters) => {
  await phieuMuonStore.getallphieumuons(data);
};
const tra = async(id: string)=>{
  const _data = new phieutravm();
  _data.id = Guid.createEmpty().toString();
  _data.phieuMuonId = id;
  _data.ngayTra = new Date();
   await phieutraStore.addphieutra(_data);
   if(phieutraStore._successfully){
    toast.success( cst.trasuccess);
   }
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
      await phieuMuonStore.delphieumuon(id);
      if (phieuMuonStore._successfully) {
        await chitietphieumuonStore.delchitietphieumuon(id);
        swal(cst.deletesuccess, {
          icon: cst.iconsuccess,
        });
      }
      if (phieuMuonStore._error) {
        toast.error(phieuMuonStore._errormessage);
      }
    }
    await loading(model);
  };
</script>
<style scoped></style>
