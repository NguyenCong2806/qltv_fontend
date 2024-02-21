<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <SearchDocGiaview @selectdocgia="selectdocgia"></SearchDocGiaview>
        <DocGiaInfoview :_model="_data" />
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="alert alert-primary">Thông tin sách mượn</div>
        <SearchSachview @selectsach="selectsach" />
        <SachInfoview @deleteitem="deleteitem" :_arrylist="_arrylist" />
      </div>
      <button class="btn btn-primary" @click="save">Lưu lại</button>
    </div>
  </section>
  <div class="simple-footer">Copyright &copy; devcong 2018</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import SearchDocGiaview from "./SearchDocGiaview.vue";
import SearchSachview from "./SearchSachview.vue";
import DocGiaInfoview from "./DocGiaInfoview.vue";
import docgiavm from "../../../model/docgia/docgiavm";
import SachInfoview from "./SachInfoview.vue";

import { Guid } from "guid-typescript";
import sachvm from "../../../model/sach/sachvm";
import { usephieumuonStore } from "../../../store/PhieuMuon";
import phieumuonvm from "../../../model/phieumuon/phieumuonvm";
import { usechitietphieumuonStore } from "../../../store/ChiTietPhieuMuon";
import chitietphieumuonvm from "../../../model/chitietphieumuon/chitietphieumuonvm";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";

const _maphieu = ref<string>(Guid.create().toString());
const _data = ref<docgiavm>(new docgiavm());
const _phiemuon = ref<phieumuonvm>(new phieumuonvm());
const _arrylist = ref<Array<sachvm>>(new Array<sachvm>());

const phieuMuonStore = usephieumuonStore();
const chitietphieumuonStore = usechitietphieumuonStore();

const selectdocgia = (data: docgiavm) => {
  _data.value = data;

  _phiemuon.value.id = _maphieu.value;
  _phiemuon.value.maDG = data.id;
  _phiemuon.value.ngayMuon = new Date();
};

const selectsach = (model: sachvm) => {
  const _index = _arrylist.value.findIndex((x) => x.id == model.id);
  if (_index < 0) {
    _arrylist.value.push(model);
  }
};
const deleteitem = (id: string) => {
  const _index = _arrylist.value.findIndex((x) => x.id == id);
  _arrylist.value.splice(_index, 1);
};
const save = async () => {
  /// valide //
  if (_phiemuon.value.id == undefined) {
    toast.error(cst.warningmessagephieumuon);
  } else {
    await phieuMuonStore.addphieumuon(_phiemuon.value);
    if (phieuMuonStore._successfully) {
      const _listctphieumuon = new Array<chitietphieumuonvm>();
      if (_arrylist.value.length > 0) {
        for (const item of _arrylist.value) {
          let _item = new chitietphieumuonvm();
          (_item.sachId = item.id),
            (_item.id = Guid.createEmpty().toString()),
            (_item.phieuMuonId = _maphieu.value),
            (_item.ngayTra = new Date()),
            _listctphieumuon.push(_item);
        }
        await chitietphieumuonStore.addchitietphieumuon(_listctphieumuon);
        if (chitietphieumuonStore._successfully) {
          toast.success(cst.phiuemuonsuccess);
        }
      } else {
        toast.error(cst.warningmessagephieumuonsach);
      }
    }
  }
};
</script>
<style scoped></style>
