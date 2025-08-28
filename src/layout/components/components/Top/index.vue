<template>
  <div class="topbar">
    <nav class="navbar navbar-expand">
      <!-- Logo & School Name -->
      <div class="topbar-logo-header">
        <div class="logo-container">
          <div class="logo-icon-wrapper">
            <i class="bx bx-home-heart logo-icon"></i>
          </div>
        </div>
        <div class="school-info">
          <h4 class="school-name">Mầm non Laura</h4>
          <p class="school-motto">Nơi ươm mầm tương lai</p>
        </div>
      </div>

      <!-- Mobile Toggle -->
      <div class="mobile-toggle-menu">
        <i class='bx bx-menu'></i>
      </div>

      <!-- Search Bar -->
      <div class="search-bar flex-grow-1">
        <div class="search-container">
          <div class="search-input-wrapper">
            <input type="text" class="form-control search-control" placeholder="Tìm kiếm học sinh, giáo viên...">
            <span class="search-icon">
              <i class='bx bx-search'></i>
            </span>
            <span class="search-close">
              <i class='bx bx-x'></i>
            </span>
          </div>
        </div>
      </div>

      <!-- Top Menu -->
      <div class="top-menu ms-auto">
        <ul class="navbar-nav align-items-center">
          <!-- Mobile Search Icon -->
          <li class="nav-item mobile-search-icon">
            <a class="nav-link" href="#">
              <i class='bx bx-search'></i>
            </a>
          </li>

          <!-- Quick Apps -->
          <li class="nav-item dropdown dropdown-large">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              <i class='bx bx-grid-alt'></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end apps-dropdown">
              <div class="dropdown-header">
                <h6>Ứng dụng nhanh</h6>
              </div>
              <div class="apps-grid">
                <div class="app-item">
                  <div class="app-icon bg-primary">
                    <i class='bx bx-user-group'></i>
                  </div>
                  <span class="app-name">Học sinh</span>
                </div>
                <div class="app-item">
                  <div class="app-icon bg-success">
                    <i class='bx bx-chalkboard'></i>
                  </div>
                  <span class="app-name">Giáo viên</span>
                </div>
                <div class="app-item">
                  <div class="app-icon bg-warning">
                    <i class='bx bx-home'></i>
                  </div>
                  <span class="app-name">Lớp học</span>
                </div>
                <div class="app-item">
                  <div class="app-icon bg-info">
                    <i class='bx bx-calendar'></i>
                  </div>
                  <span class="app-name">Lịch học</span>
                </div>
                <div class="app-item">
                  <div class="app-icon bg-danger">
                    <i class='bx bx-dollar'></i>
                  </div>
                  <span class="app-name">Tài chính</span>
                </div>
                <div class="app-item">
                  <div class="app-icon bg-secondary">
                    <i class='bx bx-file'></i>
                  </div>
                  <span class="app-name">Báo cáo</span>
                </div>
              </div>
            </div>
          </li>

          <!-- Notifications -->
          <li class="nav-item dropdown dropdown-large">
            <a class="nav-link dropdown-toggle position-relative" href="#" role="button" data-bs-toggle="dropdown">
              <span class="notification-badge">7</span>
              <i class='bx bx-bell'></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end notification-dropdown">
              <div class="dropdown-header">
                <h6>Thông báo</h6>
                <button class="btn btn-sm btn-outline-primary">Đánh dấu đã đọc</button>
              </div>
              <div class="notifications-list">
                <div class="notification-item">
                  <div class="notification-icon bg-primary">
                    <i class="bx bx-user-plus"></i>
                  </div>
                  <div class="notification-content">
                    <h6>Học sinh mới</h6>
                    <p>Nguyễn Văn A đã được thêm vào lớp Mầm</p>
                    <small class="text-muted">2 phút trước</small>
                  </div>
                </div>
                <div class="notification-item">
                  <div class="notification-icon bg-success">
                    <i class="bx bx-calendar-check"></i>
                  </div>
                  <div class="notification-content">
                    <h6>Lịch học cập nhật</h6>
                    <p>Lịch học tuần mới đã được cập nhật</p>
                    <small class="text-muted">15 phút trước</small>
                  </div>
                </div>
                <div class="notification-item">
                  <div class="notification-icon bg-warning">
                    <i class="bx bx-dollar"></i>
                  </div>
                  <div class="notification-content">
                    <h6>Thu học phí</h6>
                    <p>45 học sinh đã đóng học phí tháng 12</p>
                    <small class="text-muted">1 giờ trước</small>
                  </div>
                </div>
                <div class="notification-item">
                  <div class="notification-icon bg-info">
                    <i class="bx bx-file"></i>
                  </div>
                  <div class="notification-content">
                    <h6>Báo cáo tháng</h6>
                    <p>Báo cáo thống kê tháng 11 đã hoàn thành</p>
                    <small class="text-muted">2 giờ trước</small>
                  </div>
                </div>
              </div>
              <div class="dropdown-footer">
                <a href="#" class="btn btn-outline-primary btn-sm w-100">Xem tất cả thông báo</a>
              </div>
            </div>
          </li>

          <!-- Messages -->
          <li class="nav-item dropdown dropdown-large">
            <a class="nav-link dropdown-toggle position-relative" href="#" role="button" data-bs-toggle="dropdown">
              <span class="message-badge">3</span>
              <i class='bx bx-message-rounded'></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end message-dropdown">
              <div class="dropdown-header">
                <h6>Tin nhắn</h6>
                <button class="btn btn-sm btn-outline-primary">Đánh dấu đã đọc</button>
              </div>
              <div class="messages-list">
                <div class="message-item">
                  <div class="message-avatar">
                    <img src="../../../../assets/images/avatars/avatar-1.png" alt="user avatar">
                    <span class="status-indicator online"></span>
                  </div>
                  <div class="message-content">
                    <h6>Nguyễn Thị B</h6>
                    <p>Xin chào, tôi muốn hỏi về học phí tháng 12</p>
                    <small class="text-muted">5 phút trước</small>
                  </div>
                </div>
                <div class="message-item">
                  <div class="message-avatar">
                    <img src="../../../../assets/images/avatars/avatar-2.png" alt="user avatar">
                    <span class="status-indicator online"></span>
                  </div>
                  <div class="message-content">
                    <h6>Trần Văn C</h6>
                    <p>Cảm ơn cô giáo đã chăm sóc con tôi</p>
                    <small class="text-muted">15 phút trước</small>
                  </div>
                </div>
                <div class="message-item">
                  <div class="message-avatar">
                    <img src="../../../../assets/images/avatars/avatar-3.png" alt="user avatar">
                    <span class="status-indicator offline"></span>
                  </div>
                  <div class="message-content">
                    <h6>Lê Thị D</h6>
                    <p>Con tôi có thể đi học lại từ tuần sau không?</p>
                    <small class="text-muted">1 giờ trước</small>
                  </div>
                </div>
              </div>
              <div class="dropdown-footer">
                <a href="#" class="btn btn-outline-primary btn-sm w-100">Xem tất cả tin nhắn</a>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- User Profile -->
      <div class="user-box dropdown">
        <a class="user-profile-link" href="#" role="button" data-bs-toggle="dropdown">
          <div class="user-avatar">
            <img src="https://via.placeholder.com/40x40/667eea/ffffff?text=LA" alt="user avatar">
            <span class="status-indicator online"></span>
          </div>
          <div class="user-info">
            <p class="user-name">Admin Laura</p>
            <p class="user-role">Quản trị viên</p>
          </div>
          <i class="bx bx-chevron-down dropdown-arrow"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-end user-dropdown">
          <li class="dropdown-header">
            <h6>Hồ sơ người dùng</h6>
          </li>
          <li>
            <router-link to="/admin/profile" class="dropdown-item">
              <i class="bx bx-user"></i>
              <span>Hồ sơ cá nhân</span>
            </router-link>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="bx bx-cog"></i>
              <span>Cài đặt</span>
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="bx bx-help-circle"></i>
              <span>Trợ giúp</span>
            </a>
          </li>
          <li class="dropdown-divider"></li>
          <li>
            <a class="dropdown-item text-danger" href="#">
              <i class="bx bx-log-out"></i>
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopHeader'
}
</script>

<style scoped>
.topbar {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-bottom: 1px solid #e9ecef;
  padding: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
}

.navbar {
  padding: 0.75rem 1.5rem;
}

/* Logo & School Name */
.topbar-logo-header {
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 280px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-icon-wrapper {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.logo-icon {
  font-size: 24px;
  color: white;
}

.school-info {
  display: flex;
  flex-direction: column;
}

.school-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  line-height: 1.2;
}

.school-motto {
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0;
  font-style: italic;
}

/* Mobile Toggle */
.mobile-toggle-menu {
  display: none;
  font-size: 24px;
  color: #6c757d;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-toggle-menu:hover {
  background: #f8f9fa;
  color: #667eea;
}

/* Search Bar */
.search-bar {
  max-width: 500px;
  margin: 0 2rem;
}

.search-container {
  position: relative;
}

.search-input-wrapper {
  position: relative;
}

.search-control {
  border: 2px solid #e9ecef;
  border-radius: 25px;
  padding: 12px 45px 12px 20px;
  font-size: 0.9rem;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.search-control:focus {
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  font-size: 18px;
}

.search-close {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #6c757d;
  font-size: 18px;
  cursor: pointer;
  display: none;
}

/* Top Menu */
.top-menu {
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 5px;
}

.nav-link {
  color: #6c757d;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #667eea;
  background: #f8f9fa;
}

.nav-link i {
  font-size: 20px;
}

/* Dropdowns */
.dropdown-menu {
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 0;
  min-width: 320px;
}

.dropdown-header {
  padding: 20px 20px 15px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-header h6 {
  margin: 0;
  font-weight: 600;
  color: #2c3e50;
}

.dropdown-footer {
  padding: 15px 20px;
  border-top: 1px solid #e9ecef;
}

/* Apps Dropdown */
.apps-dropdown {
  min-width: 400px;
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
}

.app-item {
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.app-item:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.app-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-size: 20px;
  color: white;
}

.app-name {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 500;
}

/* Notifications */
.notification-badge, .message-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #dc3545;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.notifications-list, .messages-list {
  max-height: 300px;
  overflow-y: auto;
}

.notification-item, .message-item {
  display: flex;
  align-items: flex-start;
  padding: 15px 20px;
  border-bottom: 1px solid #f8f9fa;
  transition: all 0.3s ease;
}

.notification-item:hover, .message-item:hover {
  background: #f8f9fa;
}

.notification-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  font-size: 18px;
  color: white;
}

.notification-content h6, .message-content h6 {
  margin: 0 0 5px 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

.notification-content p, .message-content p {
  margin: 0 0 5px 0;
  font-size: 0.8rem;
  color: #6c757d;
  line-height: 1.4;
}

/* Messages */
.message-avatar {
  position: relative;
  margin-right: 15px;
  flex-shrink: 0;
}

.message-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

.status-indicator.online {
  background: #28a745;
}

.status-indicator.offline {
  background: #6c757d;
}

/* User Profile */
.user-box {
  margin-left: 20px;
}

.user-profile-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 15px;
  border-radius: 25px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.user-profile-link:hover {
  background: #f8f9fa;
  text-decoration: none;
  color: #2c3e50;
}

.user-avatar {
  position: relative;
}

.user-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  color: #2c3e50;
}

.user-role {
  font-size: 0.75rem;
  color: #6c757d;
  margin: 0;
}

.dropdown-arrow {
  font-size: 16px;
  color: #6c757d;
  transition: transform 0.3s ease;
}

.user-profile-link[aria-expanded="true"] .dropdown-arrow {
  transform: rotate(180deg);
}

.user-dropdown {
  min-width: 200px;
}

.user-dropdown .dropdown-item {
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.user-dropdown .dropdown-item:hover {
  background: #f8f9fa;
  color: #667eea;
}

.user-dropdown .dropdown-item i {
  font-size: 18px;
  width: 20px;
}

/* Mobile Responsive */
@media (max-width: 1200px) {
  .search-bar {
    margin: 0 1rem;
  }
  
  .topbar-logo-header {
    min-width: 250px;
  }
}

@media (max-width: 992px) {
  .mobile-toggle-menu {
    display: block;
  }
  
  .search-bar {
    display: none;
  }
  
  .topbar-logo-header {
    min-width: 200px;
  }
  
  .school-name {
    font-size: 1.1rem;
  }
  
  .school-motto {
    display: none;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 1rem;
  }
  
  .topbar-logo-header {
    min-width: 180px;
  }
  
  .logo-icon-wrapper {
    width: 40px;
    height: 40px;
  }
  
  .logo-icon {
    font-size: 20px;
  }
  
  .school-name {
    font-size: 1rem;
  }
  
  .user-info {
    display: none;
  }
  
  .dropdown-menu {
    min-width: 280px;
  }
}
</style>