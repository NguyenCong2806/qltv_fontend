<template>
    <div class="popup">
      <div class="popup-dialog" role="document">
        <div class="popup-content">
          <div class="popup-header">
            <h5 class="popup-title">{{props.modaltitel }}</h5>
            <button type="button" class="close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="popup-body">
            <div class="card">
              <Form
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="card-body">
                  <div class="form-group">
                    <label>Mã id</label>
                    <input
                      type="text"
                      class="form-control"
                      readonly
                      v-model="nhaxuatbanStore._dataitem.id"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      >Nhà xuất bản
                      <span class="text-danger">&#8903;</span></label
                    >
                    <Field
                      name="name"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.name }"
                      v-model="nhaxuatbanStore._dataitem.name"
                    />
                    <div class="invalid-feedback">{{ errors.name }}</div>
                  </div>
                </div>
                <div class="card-footer text-right">
                  <button type="button" class="btn btn-secondary" @click="close">
                    Hủy
                  </button>
                  &nbsp;
                  <button type="submit" class="btn btn-primary">Lưu lại</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usenhaxuatbanStore } from "../../../store/NhaXuatBan";
  import { Form, Field } from "vee-validate";
  import * as Yup from "yup";
import nhaxuatbanvm from "../../../model/nhaxuatban/nhaxuatbanvm";

  const props = defineProps<{
    modaltitel: string;
  }>();
  const nhaxuatbanStore = usenhaxuatbanStore();
  
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Bắt buộc nhập tên loại sách!")
      .max(255, "Không vượt quá 255 ký tự!"),
  });
  const emit = defineEmits<{
    (e: "close"): void;
    (e: "save", data: nhaxuatbanvm): void;
  }>();
  const close = () => {
    emit("close");
  };
  const onSubmit = () => {
    emit("save", nhaxuatbanStore._dataitem);
  };
  
  </script>
  
  <style scoped>
  .popup-open {
    overflow: hidden;
  }
  
  .popup-open .popup {
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: block;
    overflow: hidden;
    outline: 0;
    background: rgba(87, 84, 84, 0.3);
  }
  
  .popup-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }
  
  .popup.fade .popup-dialog {
    transition: -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%);
  }
  
  @media screen and (prefers-reduced-motion: reduce) {
    .popup.fade .popup-dialog {
      transition: none;
    }
  }
  
  .popup.show .popup-dialog {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  
  .popup-dialog-centered {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
  }
  
  .popup-dialog-centered::before {
    display: block;
    height: calc(100vh - (0.5rem * 2));
    content: "";
  }
  
  .popup-content {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 0px solid rgba(51, 46, 46, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }
  
  .popup-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;
  }
  
  .popup-backdrop.fade {
    opacity: 0;
  }
  
  .popup-backdrop.show {
    opacity: 0.5;
  }
  
  .popup-header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
  
  .popup-header .close {
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }
  
  .popup-title {
    margin-bottom: 0;
    line-height: 1.5;
  }
  
  .popup-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
  }
  
  .popup-footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
  }
  
  .popup-footer > :not(:first-child) {
    margin-left: 0.25rem;
  }
  
  .popup-footer > :not(:last-child) {
    margin-right: 0.25rem;
  }
  
  .popup-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }
  
  @media (min-width: 576px) {
    .popup-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .popup-dialog-centered {
      min-height: calc(100% - (1.75rem * 2));
    }
    .popup-dialog-centered::before {
      height: calc(100vh - (1.75rem * 2));
    }
    .popup-sm {
      max-width: 300px;
    }
  }
  
  @media (min-width: 992px) {
    .popup-lg {
      max-width: 800px;
    }
  }
  </style>
  