<template>
  <section class="section">
    <div class="section-header">
      <h1>Biểu mẫu sách</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <RouterLink to="/sach">sách</RouterLink>
        </div>
        <div class="breadcrumb-item">
          <RouterLink to="/">hệ thống</RouterLink>
        </div>
        <div class="breadcrumb-item">qltv</div>
      </div>
    </div>
    <div class="section-body">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6">
          <div class="card">
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="card-header">
                <h4>Thông tin sách</h4>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label>Tên sách</label>
                  <Field
                    name="name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    v-model="sachStore._dataitem.name"
                  />
                  <div class="invalid-feedback">{{ errors.name }}</div>
                </div>
                <div class="form-group">
                  <label>Tác giả</label>
                  <Field
                    name="author"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.author }"
                    v-model="sachStore._dataitem.author"
                  />
                  <div class="invalid-feedback">{{ errors.author }}</div>
                </div>
                <div class="form-group">
                  <label>Loại sách</label>
                  <Field
                    name="loaiSachId"
                    as="select"
                    class="form-control"
                    :class="{ 'is-invalid': errors.loaiSachId }"
                    v-model="sachStore._dataitem.loaiSachId"
                  >
                    <option
                      v-for="ls in loaiSachStore._list"
                      :key="ls.id"
                      :value="ls.id"
                      :selected="true"
                    >
                      {{ ls.name }}
                    </option>
                  </Field>
                  <div class="invalid-feedback">{{ errors.loaiSachId }}</div>
                </div>
                <div class="form-group">
                  <label>Năm xuất bản</label>
                  <Field
                    name="namXB"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.namXB }"
                    v-model="sachStore._dataitem.namXB"
                  />
                  <div class="invalid-feedback">{{ errors.namXB }}</div>
                </div>
                <div class="form-group">
                  <label>Nhà xuất bản</label>
                  <Field
                    name="nhaXuanBanId"
                    as="select"
                    class="form-control"
                    :class="{ 'is-invalid': errors.nhaXuanBanId }"
                    v-model="sachStore._dataitem.nhaXuanBanId"
                  >
                    <option
                      v-for="bk in nhaxuatbanStore._list"
                      :key="bk.id"
                      :value="bk.id"
                      :selected="true"
                    >
                      {{ bk.name }}
                    </option>
                  </Field>
                  <div class="invalid-feedback">{{ errors.nhaXuanBanId }}</div>
                </div>
                <div class="form-group">
                  <label>Số lượng</label>
                  <Field
                    name="soLuong"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.soLuong }"
                    v-model="sachStore._dataitem.soLuong"
                  />
                  <div class="invalid-feedback">{{ errors.soLuong }}</div>
                </div>
                <div class="form-group">
                  <label>Giá sách</label>
                  <Field
                    name="giaSach"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.giaSach }"
                    v-model="sachStore._dataitem.giaSach"
                  />
                  <div class="invalid-feedback">{{ errors.giaSach }}</div>
                </div>
                <div class="form-group">
                  <label>Ảnh bìa sách</label>
                  <Field
                    name="file"
                    accept="image/*"
                    class="form-control"
                    type="file"
                    @change="previewfiles($event)"
                    :class="{ 'is-invalid': errors.file }"
                    v-model="sachStore._file"
                  />
                  <div class="invalid-feedback">{{ errors.file }}</div>
                </div>
              </div>
              <div class="card-footer text-right">
                <button type="submit" class="btn btn-primary">
                  <span class="ion-soup-can"></span>
                  Lưu lại
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <div class="box-img">
            <img
              class="book-img"
              alt="anhsach"
              :src="
                _newImage ||
                'https://www.namepros.com/attachments/empty-png.89209/'
              "
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { useloaiSachStore } from "../../../store/LoaiSach";
import { usenhaxuatbanStore } from "../../../store/NhaXuatBan";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";
import { usesachStore } from "../../../store/Sach";

const loaiSachStore = useloaiSachStore();
const nhaxuatbanStore = usenhaxuatbanStore();
const sachStore = usesachStore();

onMounted(async () => {
  await loaiSachStore.getloaisachselect();
  await nhaxuatbanStore.getnhaxuatbanselect();
});

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Bắt buộc nhập tên sách!")
    .max(255, "Không vượt quá 255 ký tự!"),
  author: Yup.string()
    .required("Bắt buộc nhập tác giả!")
    .max(255, "Không vượt quá 255 ký tự!"),
  loaiSachId: Yup.number().required("Bắt buộc chọn loại sách!"),
  nhaXuanBanId: Yup.number().required("Bắt buộc chọn nhà xuất bản!"),
  namXB: Yup.number()
    .typeError("Phải nhập lại số!")
    .integer("Phải nhập số nguyên!"),
  soLuong: Yup.number()
    .typeError("Phải nhập lại số!")
    .integer("Phải nhập số nguyên!"),
  giaSach: Yup.number().typeError("Phải nhập lại số!"),
  file: Yup.mixed().required("Bắt buộc nhập file ảnh!"),
});

const _newImage = ref<any>();

const previewfiles = (event: any) => {
  const file = event.target.files[0];
  sachStore._dataitem.anhBia = file.name;
  const theReader = new FileReader();
  theReader.onloadend = async () => {
    _newImage.value = await theReader.result;
  };
  theReader.readAsDataURL(file);
};

const onSubmit = async () => {
  await sachStore.addsach(sachStore._dataitem, sachStore._file as any);
  if (sachStore._successfully) {
    toast.success(cst.addsuccess);
  }
  if (sachStore._error) {
    toast.error(loaiSachStore._errormessage);
  }
};
</script>
<style scoped>
.book-img {
  width: 100%;
  height: 100vh;
}
</style>
