<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <SearchDocGiaview @selectdocgia="selectdocgia"></SearchDocGiaview>
        <DocGiaInfoview :_model="_data"/>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="alert alert-primary">Thông tin sách mượn</div>
        <SearchSachview @selectsach="selectsach"/>
        <SachInfoview @deleteitem="deleteitem" :_arrylist="_arrylist"/>
      </div>
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

import { Guid } from 'guid-typescript';
import sachvm from "../../../model/sach/sachvm";

const _maphieu = ref<string>(Guid.create().toString());
const _data = ref<docgiavm>(new docgiavm());
const _arrylist = ref<Array<sachvm>>(new Array<sachvm>());
    
const selectdocgia =(data: docgiavm)=>{
   _data.value = data;
   console.log(_maphieu.value);
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
</script>
<style scoped></style>
