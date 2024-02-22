<template>
<section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <img :src="imglogin" alt="logo" width="100" class="shadow-light rounded-circle">
            </div>

            <div class="card card-primary">
              <div class="card-header"><h4>Đăng nhập</h4></div>

              <div class="card-body">
                <Form @submit="onSubmit"
                    :validation-schema="schema"
                    v-slot="{ errors }"  class="needs-validation">
                  <div class="form-group">
                    <label>Tài khoản</label>
                    <Field
                      name="userName"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.userName }"
                      v-model="userStore._dataitem.userName"
                    />
                    <div class="invalid-feedback">{{ errors.userName }}</div>
                  </div>

                  <div class="form-group">
                    <div class="d-block">
                    	<label class="control-label">Mật khẩu</label>
                      <div class="float-right">
                        <a href="auth-forgot-password.html" class="text-small">
                          Quên mật khẩu?
                        </a>
                      </div>
                    </div>
                    <Field
                      name="password"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': errors.password }"
                      v-model="userStore._dataitem.password"
                    />
                    <div class="invalid-feedback">{{ errors.password }}</div>
                  </div>

                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
                      <label class="custom-control-label" for="remember-me">Ghi nhớ tài khoản</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                      Đăng nhập
                    </button>
                  </div>
                </Form>
              </div>
            </div>
            <div class="simple-footer">
              Copyright &copy; devcong 2018
            </div>
          </div>
        </div>
      </div>
</section>
</template>
<script setup lang="ts">
  const imglogin:string = "/img/stisla-fill.svg";

import {useauthorStore} from "../../store/authenticator"
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

const userStore = useauthorStore();
const router = useRouter();

const schema = Yup.object().shape({
  userName: Yup.string()
    .required("Bắt buộc nhập tài khoản!")
    .max(255, "Không vượt quá 255 ký tự!"),
    password: Yup.string()
    .required("Bắt buộc nhập mật khẩu!")
    .max(255, "Không vượt quá 255 ký tự!"),
});

const onSubmit = async()=>{
  await userStore.login(userStore._dataitem);
  if (userStore._successfully) {
    router.push('/');
  }
  if (userStore._error) {
    toast.error(userStore._errormessage);
  }
}
</script>
<style scoped>
</style>