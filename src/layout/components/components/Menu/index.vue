<template>
  <div class="admin-navbar">
    <!-- Main Navigation -->
    <nav class="navbar-nav">
      <ul class="nav-list">
        <!-- Dashboard -->
        <li class="nav-item">
          <router-link to="/admin/dashboard" class="nav-link" active-class="active">
            <i class="bx bx-home-circle"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <!-- Nhân Viên Dropdown -->
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-user-group"></i>
            <span>Nhân Sự</span>      
            <i class="fa-solid fa-angle-down"></i>     
          </a>
          <ul class="dropdown-menu" data-bs-popper="static">
            <li>
              <router-link to="/admin/phan-quyen" class="dropdown-item">
                <i class="bx bx-shield-quarter"></i>
                <span>Phân Quyền</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/nhan-vien" class="dropdown-item">
                <i class="bx bx-user"></i>
                <span>Nhân viên</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/giao-vien" class="dropdown-item">
                <i class="fa-solid fa-person-chalkboard"></i>
                <span>Giáo Viên</span>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- Học Sinh & Phụ Huynh Dropdown -->
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa-solid fa-children"></i>
            <span>Học Sinh & PH</span>
            <i class="fa-solid fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu" data-bs-popper="static">
            <li>
              <router-link to="/admin/hoc-sinh" class="dropdown-item">
                <i class="bx bx-user-circle"></i>
                <span>Học Sinh</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/phu-huynh" class="dropdown-item">
                <i class="bx bx-user-plus"></i>
                <span>Phụ Huynh</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/diem-danh" class="dropdown-item">
                <i class="bx bx-check-square"></i>
                <span>Điểm Danh</span>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- Lớp Học -->
        <li class="nav-item">
          <router-link to="/admin/lop-hoc" class="nav-link" active-class="active">
            <i class="bx bx-building-house"></i>
            <span>Lớp Học</span>
          </router-link>
        </li>
        <!-- Sức Khoẻ -->
        <li class="nav-item">
          <router-link to="/admin/suc-khoe" class="nav-link" active-class="active">
            <i class="fa-solid fa-stethoscope"></i>
            <span>Sức Khoẻ</span>
          </router-link>
        </li>
        <!-- Học phí -->
        <li class="nav-item">
          <router-link to="/admin/hoc-phi" class="nav-link" active-class="active">
            <i class="fa-solid fa-stethoscope"></i>
            <span>Học Phí</span>
          </router-link>
        </li>
        <!-- Thực Đơn -->
        <li class="nav-item">
          <router-link to="/admin/thuc-don" class="nav-link" active-class="active">
            <i class="bx bx-restaurant"></i>
            <span>Thực Đơn</span>
          </router-link>
        </li>

        <!-- Báo cáo & Thống Kê Dropdown -->
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bx bx-bar-chart-alt-2"></i>
            <span>Báo cáo & TK</span>
            <i class="fa-solid fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu" data-bs-popper="static">
            <li>
              <router-link to="/admin/tai-chinh" class="dropdown-item">
                <i class="bx bx-dollar-circle"></i>
                <span>Tài Chính</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/bao-cao" class="dropdown-item">
                <i class="bx bx-file"></i>
                <span>Báo Cáo</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/thong-ke" class="dropdown-item">
                <i class="bx bx-pie-chart-alt-2"></i>
                <span>Thống Kê</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.admin-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0 2rem;
  height: 70px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 999;
  width: 100%;
  margin-bottom: 0;
}

/* Navigation */
.navbar-nav {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 800px;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 5px;
  flex-wrap: nowrap;
}

.nav-item {
  position: relative;
  white-space: nowrap;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-link i {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.nav-link span {
  font-size: 0.9rem;
  flex-shrink: 0;
}

/* Dropdown */
.dropdown-toggle {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.dropdown-toggle:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 8px 0;
  margin-top: 8px;
  list-style: none;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: #f8f9fa;
  color: #667eea;
  transform: translateX(5px);
}

.dropdown-item i {
  font-size: 1rem;
  width: 16px;
  text-align: center;
  flex-shrink: 0;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .nav-link span {
    display: none;
  }
  .nav-link {
    padding: 12px;
  }
  .dropdown-menu {
    left: -50px;
  }
  .navbar-nav {
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .admin-navbar {
    padding: 0 1rem;
    height: 50px;
  }
  .navbar-nav {
    justify-content: flex-start;
    overflow-x: auto;
    max-width: none;
    flex: 1;
  }
  .nav-list {
    gap: 2px;
    min-width: max-content;
  }
  .nav-link {
    padding: 10px;
    min-width: 50px;
    justify-content: center;
  }
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Custom scrollbar for mobile */
@media (max-width: 768px) {
  .navbar-nav::-webkit-scrollbar {
    height: 4px;
  }
  .navbar-nav::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  .navbar-nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }
}

</style>