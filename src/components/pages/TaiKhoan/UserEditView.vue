<template>
  <section class="section">
    <div class="section-header">
      <h1>Biểu mẫu tài khoản</h1>
      <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active">
          <RouterLink to="/taikhoan">tài khoản</RouterLink>
        </div>
        <div class="breadcrumb-item">
          <RouterLink to="/">hệ thống</RouterLink>
        </div>
        <div class="breadcrumb-item">qltv</div>
      </div>
    </div>
    <div class="section-body">
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <div class="card">
            <Form
              @submit="onSubmit"
              :validation-schema="schema"
              v-slot="{ errors }"
            >
              <div class="card-header">
                <h4>Thông tin tài khoản</h4>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label>Họ và tên</label>
                  <Field
                    name="name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name }"
                    v-model="userStore._dataitem.name"
                  />
                  <div class="invalid-feedback">{{ errors.name }}</div>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <Field
                    name="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    v-model="userStore._dataitem.email"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
                <div class="form-group">
                  <label>Mật khẩu</label>
                  <Field
                    name="password"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.password }"
                    v-model="userStore._dataitem.password"
                  />
                  <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <div class="form-group">
                  <label>Tuổi</label>
                  <Field
                    name="age"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.age }"
                    v-model="userStore._dataitem.age"
                  />
                  <div class="invalid-feedback">{{ errors.age }}</div>
                </div>
                <div class="form-group">
                  <label>Ngày sinh</label>
                  <Field
                    name="birthday"
                    type="date"
                    class="form-control"
                    :class="{ 'is-invalid': errors.birthday }"
                    v-model="userStore._dataitem.birthday"
                  />
                  <div class="invalid-feedback">{{ errors.birthday }}</div>
                </div>
                <div class="form-group">
                  <label>Giới tính</label>
                  <input
                    checked
                    type="checkbox"
                    v-model="userStore._dataitem.sex"
                  />
                  <div class="invalid-feedback">{{ errors.sex }}</div>
                </div>
              </div>
              <div class="card-footer text-right">
                <RouterLink to="/taikhoan" class="btn btn-info">
                  <span class="ion-log-out"></span>
                  Trở lại
                </RouterLink>
                &nbsp;
                <button type="submit" class="btn btn-primary">
                  <span class="ion-soup-can"></span>
                  Lưu lại
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";
import { useuserStore } from "../../../store/User";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const userStore = useuserStore();
const route = useRoute();
const schema = Yup.object().shape({
  name: Yup.string()
    .required("Bắt buộc nhập!")
    .max(255, "Không vượt quá 255 ký tự!"),
  email: Yup.string()
    .email("Chưa đúng định dạng email!")
    .required("Bắt buộc nhập!")
    .max(255, "Không vượt quá 255 ký tự!"),
  password: Yup.string()
    .required("Bắt buộc nhập!")
    .max(255, "Không vượt quá 255 ký tự!"),
  age: Yup.number()
    .typeError("Phải nhập lại số!")
    .integer("Phải nhập số nguyên!"),
  sex: Yup.boolean(),
  birthday: Yup.date()
    .typeError("Không đúng định dạng ngày")
    .required("Bắt buộc nhập!"),
});

onMounted(async () => {
  userStore.getuserbyid(route.params.id as string);
});
const onSubmit = async () => {
  await userStore.edituser(userStore._dataitem);
  if (userStore._successfully) {
    toast.success(cst.updatesuccess);
  }
  if (userStore._error) {
    toast.error(userStore._errormessage);
  }
  
};
</script>
<style scoped></style>
