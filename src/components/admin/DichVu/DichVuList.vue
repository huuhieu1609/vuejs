<template>
  <div class="service-list-container">
    <div class="service-list-header">
      <h2>DANH SÁCH DỊCH VỤ</h2>
      <button class="btn-add"><i class="bx bx-plus"></i> Thêm Mới</button>
    </div>
    <div class="service-list-search">
      <input type="text" placeholder="Tìm Kiếm" v-model="search" />
      <button class="btn-search">Tìm Kiếm</button>
    </div>
    <div class="service-list-table-wrapper">
      <table class="service-list-table table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên Dịch Vụ</th>
            <th>Giá</th>
            <th>Mô Tả</th>
            <th>Trạng Thái</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(service, idx) in filteredServices" :key="service.id">
            <td>{{ idx + 1 }}</td>
            <td>{{ service.name }}</td>
            <td>{{ service.price}}</td>
            <td>{{ service.description }}</td>
            <td>
              <span :class="['status-badge', service.active ? 'active' : 'inactive']">
                {{ service.active ? 'Hoạt Động' : 'Ngừng' }}
              </span>
            </td>
            <td>
              <button class="btn-action btn-view"><i class="bx bx-info-circle"></i> Xem</button>
              <button class="btn-action btn-edit"><i class="bx bx-edit"></i> Cập Nhật</button>
              <button class="btn-action btn-delete"><i class="bx bx-trash"></i> Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DichVuList',
  data() {
    return {
      search: '',
      services: [
        { id: 1, name: 'Giặt ủi', price: 50000, description: 'Dịch vụ giặt ủi quần áo', active: true },
        { id: 2, name: 'Đưa đón sân bay', price: 200000, description: 'Xe đưa đón sân bay', active: true },
        { id: 3, name: 'Ăn sáng', price: 80000, description: 'Buffet sáng tại khách sạn', active: false },
      ],
    };
  },
  computed: {
    filteredServices() {
      if (!this.search) return this.services;
      return this.services.filter(s =>
        s.name.toLowerCase().includes(this.search.toLowerCase()) ||
        s.description.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  filters: {
    currency(val) {
      return val.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
  },
};
</script>

<style scoped>
.service-list-container {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  padding: 24px 18px 32px 18px;
  margin: 32px auto;
  max-width: 95vw;
  width: 95%;
}
.service-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.service-list-header h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin: 0;
}
.btn-add {
  background: #2196f3;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-add:hover {
  background: #1976d2;
}
.service-list-search {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}
.service-list-search input {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 1rem;
  outline: none;
}
.btn-search {
  background: #2196f3;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 22px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-search:hover {
  background: #1976d2;
}
.service-list-table-wrapper {
  margin-top: 8px;
  overflow-x: auto;
}
.service-list-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.service-list-table th {
  background: #0090ff;
  color: #fff;
  font-weight: 600;
  padding: 10px 8px;
  text-align: center;
  font-size: 1rem;
}
.service-list-table td {
  padding: 10px 8px;
  text-align: center;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
}
.status-badge {
  display: inline-block;
  padding: 6px 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
}
.status-badge.active {
  background: #19d12e;
}
.status-badge.inactive {
  background: #bdbdbd;
}
.btn-action {
  border: none;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 2px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-view {
  background: #ffc107;
  color: #222;
}
.btn-edit {
  background: #2196f3;
  color: #fff;
}
.btn-delete {
  background: #f44336;
  color: #fff;
}
.btn-view:hover {
  background: #ffb300;
}
.btn-edit:hover {
  background: #1976d2;
}
.btn-delete:hover {
  background: #c62828;
}
</style>
