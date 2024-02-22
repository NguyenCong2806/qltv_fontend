<template>
    <section class="section">
      <div class="section-header">
        <h1>Danh sách phiếu mượn</h1>
        <div class="section-header-breadcrumb">
          <div class="breadcrumb-item active">
            <router-link to="/phieutra">phiếu mượn</router-link>
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
                        <th>Mã phiếu trả</th>
                        <th>Tên độc giả</th>
                        <th>Email độc giả</th>
                        <th>Ngày trả</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in phieutraStore._datalist.results"
                        :key="item.id"
                      >
                        <td class="p-0 text-center">
                          <div class="custom-checkbox custom-control">
                            <input type="checkbox" />
                          </div>
                        </td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.phieuMuon.docGia.name }}</td>
                        <td>{{ item.phieuMuon.docGia.email }}</td>
                        <td>{{ item.ngayTra}}</td>
                        <td>
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
  import { usephieutraStore } from "../../../store/phieutra";
  import { cst } from "../../../utils/common/constcommon";
  import swal from "sweetalert";

  import { toast } from "vue3-toastify";
  
  const phieutraStore = usephieutraStore();

  var model = new searchParameters();
  
  onMounted(async () => {
    await loading(model);
  });
  const loading = async (data: searchParameters) => {
    await phieutraStore.getallphieutras(data);
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
        await phieutraStore.delphieutra(id);
        if (phieutraStore._successfully) {
          swal(cst.deletesuccess, {
            icon: cst.iconsuccess,
          });
        }
        if (phieutraStore._error) {
          toast.error(phieutraStore._errormessage);
        }
      }
      await loading(model);
    };
  </script>
  <style scoped></style>
  