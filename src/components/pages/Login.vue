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
                <form method="POST" action="#" class="needs-validation">
                  <div class="form-group">
                    <label for="us">Tài khoản</label>
                    <input id="us" type="text" class="form-control" name="us">
                  </div>

                  <div class="form-group">
                    <div class="d-block">
                    	<label for="password" class="control-label">Mật khẩu</label>
                      <div class="float-right">
                        <a href="auth-forgot-password.html" class="text-small">
                          Quên mật khẩu?
                        </a>
                      </div>
                    </div>
                    <input id="password" type="password" class="form-control"
                     name="password">
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
                </form>
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
</script>
<style scoped>
</style>