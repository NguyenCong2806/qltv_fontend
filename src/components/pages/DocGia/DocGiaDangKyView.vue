<template>
  <section class="section">
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2"
        >
          <div class="login-brand">
            <img
              :src="_imglogo"
              alt="logo"
              width="100"
              class="shadow-light rounded-circle"
            />
          </div>

          <div class="card card-primary">
            <div class="card-header"><h4>Đăng ký độc giả</h4></div>
            <div class="card-body">
              <Form @submit="onSubmit"
                    :validation-schema="schema"
                    v-slot="{ errors }" >
                <div class="row">
                  <div class="form-group col-6">
                    <label for="frist_name">Họ và tên</label>
                    <Field
                      name="name"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.name }"
                      v-model="docgiaStore._dataitem.name"
                    />
                    <div class="invalid-feedback">{{ errors.name }}</div>
                  </div>
                  <div class="form-group col-6">
                    <label for="last_name">Địa chỉ</label>
                    <Field
                      name="diaChi"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.diaChi }"
                      v-model="docgiaStore._dataitem.diaChi"
                    />
                    <div class="invalid-feedback">{{ errors.diaChi }}</div>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label for="frist_name">Email</label>
                    <Field
                      name="email"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.email }"
                      v-model="docgiaStore._dataitem.email"
                    />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                  </div>
                  <div class="form-group col-6">
                    <label for="last_name">Ngày sinh</label>
                    <Field
                      name="ngaySinh"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.ngaySinh }"
                      v-model="docgiaStore._dataitem.ngaySinh"
                    />
                    <div class="invalid-feedback">{{ errors.ngaySinh }}</div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Đăng ký
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div class="simple-footer">Copyright &copy; Stisla 2018</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {usedocgiaStore} from "../../../store/DocGia";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { toast } from "vue3-toastify";
import { cst } from "../../../utils/common/constcommon";

const docgiaStore = usedocgiaStore();
const _imglogo = "img/stisla-fill.svg";

const schema = Yup.object().shape({
    name: Yup.string()
    .required("Bắt buộc nhập họ và tên!")
    .max(255, "Không vượt quá 255 ký tự!"),

    diaChi: Yup.string()
    .required("Bắt buộc nhập địa chỉ!")
    .max(255, "Không vượt quá 255 ký tự!"),

    email: Yup.string()
    .email("Không đúng định dạng email!")
    .required("Bắt buộc nhập email!")
    .max(255, "Không vượt quá 255 ký tự!"),

    ngaySinh: Yup.date().default(() => new Date()),
});
const onSubmit = async()=>{
  await docgiaStore.adddocgia(docgiaStore._dataitem);
  if (docgiaStore._successfully) {
    toast.success(cst.dangkysuccess 
    );
  }
  if (docgiaStore._error) {
    toast.error(docgiaStore._errormessage);
  }
}
</script>
<style scope></style>
