<template>
	<div class="admin-navbar">
		<nav class="navbar-nav ">
			<ul class="nav-list ">
				<li class="nav-item">
					<router-link to="/" class="nav-link" active-class="active">
						<i class="bx bx-home-circle"></i>
						<span>Home</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/nhan-vien" class="nav-link" active-class="active">
						<i class="bx bx-home-circle"></i>
						<span>Nhân Viên</span>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/phong" class="nav-link">

						<div class="parent-icon"><i class="bx bx-list-ul"></i>
						</div>
						<div class="menu-title">Danh Sách Phòng</div>

					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/phan-quyen">
						<a class="nav-link" href="/phan-quyen">
							<div class="parent-icon"><i class="bx bx-lock"></i>
							</div>
							<div class="menu-title">Phân Quyền</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/danh-sach-khach-hang">
						<a class="nav-link" href="/danh-sach-khach-hang">
							<div class="parent-icon"><i class="bx bx-lock"></i>
							</div>
							<div class="menu-title">Danh Sách Khách hàng</div>
						</a>
					</router-link>
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