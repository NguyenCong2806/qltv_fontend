<template>
  <div class="alert alert-primary">Thông tin thẻ độc giả</div>
  <div class="wrapper">
    <input
      type="text"
      name="search"
      placeholder="Nhận tên độc giả"
      v-model="_searchkey"
      autocomplete="chrome-off"
      @change="searchchang"
    />
    <button><i class="fa fa-search"></i></button>
    <div class="show" @click="searchchang">
      <ul v-if="docgiaStore._arryitem.length > 0">
        <li class="li-text">
          Hiện thị: {{ docgiaStore._arryitem.length }} bản ghi
        </li>
        <li
          v-for="dogia in docgiaStore._arryitem"
          :key="dogia.id"
          @click="selectdocgia(dogia)"
        >
          <span>Tên:&nbsp;&nbsp;{{ dogia.name }}</span> &nbsp;&nbsp;&nbsp;
          <span>Email:&nbsp;&nbsp;{{ dogia.email }}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      <h6>Thông tin chi tiết</h6>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label>Mã phiếu mượn</label>
        <input type="text" class="form-control" v-model="_model.id" readonly />
      </div>
      <div class="form-group">
        <label>Mã độc giả</label>
        <input type="text" class="form-control" v-model="_model.id" readonly />
      </div>
      <div class="form-group">
        <label>Họ và tên</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.name"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.email"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Địa chỉ</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.diaChi"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Ngày sinh</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.ngaySinh"
          readonly
        />
      </div>
      <div class="form-group">
        <label>Hạn sử dụng thẻ</label>
        <input
          type="text"
          class="form-control"
          v-model="_model.hanSuDung"
          readonly
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { usedocgiaStore } from "../../../store/DocGia";
import docgiavm from "../../../model/docgia/docgiavm";
const docgiaStore = usedocgiaStore();
const _searchkey = ref<string>("");
const _model = ref<docgiavm>(new docgiavm());

const searchchang = async () => {
  if (_searchkey.value.length > 1) {
    await docgiaStore.getsearchdocgias(_searchkey.value);
  } else {
    docgiaStore.getdefaultdocgias();
  }
};
const selectdocgia = (model: docgiavm) => {
  _model.value = model;
  _searchkey.value = "";
  docgiaStore.getdefaultdocgias();
};
</script>
<style scoped>
.wrapper {
  border-radius: 5px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.15);
  position: relative;
  display: inline-block;
  width: 100%;
}

input {
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 5px;
  padding: 0px 40px 0px 10px;
  font-size: 18px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

input:focus {
  outline: none;
}

button {
  position: absolute;
  border: none;
  background: none;
  top: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  padding: 0;
  width: 50px;
}

button:focus {
  outline: none;
}
.li-text {
  text-align: center;
  font-weight: bold;
  color: rgb(0, 97, 0);
}
.li-text:hover {
  background: none;
}
button i {
  width: 100%;
  color: #6d7b98;
  line-height: 50px;
  font-size: 22px;
}

.show {
  padding: 0px;
}

.show ul {
  margin: 0;
  padding: 0;
}
.show ul li {
  opacity: 1;
  display: block;
  padding: 8px 12px;
  transition: all 0.5s linear;
}

.show ul li:hover {
  background: #e2e2e2;
  cursor: pointer;
  padding-left: 10px;
}
</style>
