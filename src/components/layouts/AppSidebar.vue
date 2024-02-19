<template>
  <div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <p>QLTV</p>
      </div>
      <ul class="sidebar-menu">
        <li>
          <RouterLink to="/" class="nav-link"
            ><i class="fas fa-fire"></i><span>Số liệu</span></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/loaisach" class="nav-link"
            ><i class="far fa-square"></i> <span>Loại sách</span></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/nhaxuatban" class="nav-link"
            ><i class="fas fa-th"></i> <span>Nhà xuất bản</span></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/docgia" class="nav-link"
            ><i class="fas fa-th-large"></i> <span>Độc giả</span></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/sach" class="nav-link"
            ><i class="far fa-file-alt"></i> <span>Sách</span></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/phieutra" class="nav-link"
            ><i class="fas fa-map-marker-alt"></i>
            <span>Phiếu trả</span></RouterLink
          >
        </li>
        <li>
          <RouterLink to="/phieumuon" class="nav-link"
            ><i class="fas fa-plug"></i> <span>Phiếu mượn</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/taikhoan" class="nav-link"
            ><i class="far fa-user"></i> <span>Tài khoản</span></RouterLink>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.router-link-exact-active {
  background: rgba(2, 100, 2, 0.5);
}
</style>
