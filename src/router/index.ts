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
        path: "/chitietsach/:id",
        name: "chitietsach",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/Sach/SachEditView.vue"
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
        path: "/chitietphieumuon/:id",
        name: "chitietphieumuon",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/ChiTietPhieuMuon/DSSachMuonView.vue"
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
      {
        path: "/taotaikhoan",
        name: "taotaikhoan",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/TaiKhoan/UserAddView.vue"
          ),
      },
      {
        path: "/suataikhoan/:id",
        name: "suataikhoan",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/pages/TaiKhoan/UserEditView.vue"
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
    path: "/taophieumuon",
    name: "taophieumuon",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/pages/PhieuMuon/PhieuMuonAdd.vue"
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
