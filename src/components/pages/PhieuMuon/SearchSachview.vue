<template>
  <div class="wrapper">
    <input
      type="text"
      name="search"
      placeholder="Nhận tên sách"
      autocomplete="chrome-off"
      v-model="_searchkey"
      @click="searchchang"
    />
    <button><i class="fa fa-search" @click="searchchang"></i></button>
    <div>
      <div class="card" v-if="sachStore._arryitem.length > 0">
        <div class="card-body">
          <ul>
            <li
              class="media-item"
              v-for="sach in sachStore._arryitem"
              :key="sach.id"
            >
              <div class="media-img">
                <img
                  :src="fomat_url(sach.anhBia)"
                  alt="Generic placeholder image"
                  @click="selectdocgia(sach)"
                />
              </div>
              <div class="media-bodys">
                <h5 class="mt-0 mb-1" @click="selectdocgia(sach)">
                  {{ sach.name }}
                </h5>
                <div>
                  <span
                    >Tác giả:&nbsp; <span>{{ sach.author }}</span></span
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                    >Thể loại:&nbsp; <span>{{ sach.loaiSach.name }}</span></span
                  >
                  <p>
                    <span
                      >Nhà xuất bản:&nbsp;
                      <span>{{ sach.nhaXuatBan.name }}</span></span
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span
                      >Năm xuất bản:&nbsp; <span>{{ sach.namXB }}</span></span
                    >&nbsp;
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      <h6>Thông tin chi tiết</h6>
    </div>
    <div class="card-body">
      <div class="alert alert-secondary" v-if="_arrylist"
        v-for="item in _arrylist" :key="item.id"
        >
        <div class="alert-body">
          <button class="close text-danger" data-dismiss="alert" 
          @click="deleteitem(item.id)">
            <span>×</span>
          </button>
          Sách:&nbsp;<span class="text-info text-size">{{ item.name ||"No book" }}</span
          >&nbsp;&nbsp; Số lượng:&nbsp;<span class="text-info text-size"
            >1</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import sachvm from "../../../model/sach/sachvm";
import { usesachStore } from "../../../store/Sach";
import { ref } from "vue";

const _searchkey = ref<string>("");
const sachStore = usesachStore();
let _arrylist = ref<Array<sachvm>>(new Array<sachvm>());

var url_file: string = import.meta.env.VITE_API_FILE;
const fomat_url = (img: string) => {
  return url_file + img;
};

const searchchang = async () => {
  if (_searchkey.value.length > 1) {
    await sachStore.getsearchsachs(_searchkey.value);
  } else {
    sachStore.getdefaultsachs();
  }
};
const selectdocgia = (model: sachvm) => {
    _arrylist.value.push(model);
};
const deleteitem =(id: string)=>{
  const _index = _arrylist.value.findIndex(x=>x.id==id);
   _arrylist.value.splice(_index, 1);
}
</script>
<style scoped lang="scss">
.wrapper {
  border-radius: 5px;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.15);
  position: relative;
  display: inline-block;
  width: 100%;
}
.card-body {
  ul {
    padding: 0px;
    margin: 0px;
  }
}
.text-size {
  font-size: 16px;
  font-weight: bold;
}
.media-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  .media-img {
    display: inline-block;
    overflow: hidden;
    width: 70px;
    height: 75px;
    img {
      width: 100%;
      height: 75px;
      object-fit: contain;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .media-bodys {
    display: inline-block;
    h5,
    p {
      padding: 0px;
      margin: 0px;
    }
    h5:hover {
      cursor: pointer;
    }
  }
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
