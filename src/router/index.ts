import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/layouts/AppMain.vue"
      ),
    children: [
      {
        path: "/",
        name: "dasboard",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/Dashboard.vue"
          ),
      },
      {
        path: "/loaisach",
        name: "loaisach",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/LoaiSach/LoaiSachView.vue"
          ),
      },
      {
        path: "/nhaxuatban",
        name: "nhaxuatban",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/NhaXuatBan/nhaxuatbanview.vue"
          ),
      },
      {
        path: "/docgia",
        name: "docgia",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/DocGia/DocGiaView.vue"
          ),
      },
      {
        path: "/sach",
        name: "sach",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/Sach/SachView.vue"
          ),
      },
      {
        path: "/taosach",
        name: "taosach",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/Sach/SachAddView.vue"
          ),
      },
      {
        path: "/phieutra",
        name: "phieutra",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/PhieuTra/index.vue"
          ),
      },
      {
        path: "/phieumuon",
        name: "phieumuon",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/PhieuMuon/index.vue"
          ),
      },
      {
        path: "/taikhoan",
        name: "taikhoan",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/TaiKhoan/index.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/pages/Login.vue"),
  },
  {
    path: "/dangkydocgia",
    name: "dangkydocgia",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/DocGia/DocGiaDangKyView.vue"
      ),
  },
  {
    path: "/:catchAll(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/layouts/Errors404.vue"
      ),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
