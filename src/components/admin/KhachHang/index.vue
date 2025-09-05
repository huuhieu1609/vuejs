<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
        integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div>
        <div class="row mt-2">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    <div class="row mt-2">
                        <div class="col-lg-6">
                            <h3>
                                Danh Sách Khách Hàng
                            </h3>
                        </div>
                        <div class="col-lg-6 text-end">
                            <button  data-bs-toggle="modal" data-bs-target="#ThemMoiModal" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                    
                </div>
                <div class="card-body">
                  <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Tìm Kiếm">
                                    <button class="btn btn-primary">Tìm Kiếm</button>
                                </div>
                    <table class="table table-bordered align-middle text-center">
                        <thead>
                            <tr  class="text-center align-middle bg-primary text-light">
                                <th>#</th>
                                <th>Họ Tên</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Email</th>
                                <th>Ngày Sinh</th>
                               
                                
                                <th>Giới Tính</th>
                                <th>Tình Trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value,index) in list_khachhang" :key="index">
                                <th>{{ index +1 }}</th>
                                <td>{{ value.ho_ten }}</td>
                                <td>{{ value.so_dien_thoai }}</td>
                                <td>{{ value.dia_chi }}</td>
                                <td>{{ value.email }}</td>
                                <td>{{ value.ngay_sinh }}</td>
                              
                                <td><span v-if="value.gioi_tinh == 1">Nam</span>
                                <span v-else>Nữ</span></td>
                              
                                <td><button v-if="value.tinh_trang == 1" class="btn btn-success w-100">Hoạt Động</button>
                                <button v-else class="btn btn-danger w-100">Khóa</button></td>
                                <td>
                                    <button v-on:click="Object.assign(chitiet,value)" data-bs-toggle="modal" data-bs-target="#XemChiTietModal" class="btn btn-warning me-1"><i
                                            class="fa-solid fa-circle-info ms-1"></i>Xem</button>
                                    <button v-on:click="Object.assign(update_khachhang,value)" data-bs-toggle="modal" data-bs-target="#CapNhapModal" class="btn btn-primary me-1"><i
                                            class="fa-solid fa-pen-to-square"></i>Cập Nhật</button>
                                    <button v-on:click="Object.assign(delete_khachhang,value)" data-bs-toggle="modal" data-bs-target="#XoaModal" class="btn btn-danger"><i class="fa-solid fa-trash"></i>Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Chi Tiết -->
<div class="modal fade" id="chitiet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <!-- XoaModal -->
<div class="modal fade" id="XoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Khách Hàng</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-danger" role="alert">
            Bạn Có Chắc Muốn Xóa Khách Hàng <b>{{ delete_khachhang.ho_ten }}</b> Này Không?
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button v-on:click="Xoa()" type="button" class="btn btn-primary" v>Xóa Khách Hàng</button>
      </div>
    </div>
  </div>
</div>
<!-- CapNhapModal -->
<div class="modal fade" id="CapNhapModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Khách Hàng</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Họ Tên</label>
              <input v-model="update_khachhang.ho_ten" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Số Điện Thoại</label>
              <input v-model="update_khachhang.so_dien_thoai" type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Địa Chỉ</label>
              <input v-model="update_khachhang.dia_chi" type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Email</label>
              <input v-model="update_khachhang.email" type="email" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Ngày Sinh</label>
              <input v-model="update_khachhang.ngay_sinh" type="date" class="form-control" id="exampleInputPassword1">
            </div>
            
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Giới Tính</label>
              <select v-model="update_khachhang.gioi_tinh" class="form-select" aria-label="Default select example">
                  <option selected>Chọn Giới Tính</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
            </div>
                <div class="mb-3">
                <label  for="exampleInputPassword1" class="form-label">Tình Trạng</label>
                <select v-model="update_khachhang.tinh_trang" class="form-select" aria-label="Default select example">
                    <option selected>Chọn Tình Trạng</option>
                    <option value="1">Hoạt Động</option>
                    <option value="2">Khóa</option>
                    </select>
            </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button v-on:click="CapNhat()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
      </div>
    </div>
  </div>
</div>
<!-- ThemMoiModal -->
<div class="modal fade" id="ThemMoiModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Mới Khách Hàng</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Họ Tên</label>
              <input v-model="create_khachhang.ho_ten" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Số Điện Thoại</label>
              <input v-model="create_khachhang.so_dien_thoai" type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Địa Chỉ</label>
              <input v-model="create_khachhang.dia_chi" type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Email</label>
              <input v-model="create_khachhang.email" type="email" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Ngày Sinh</label>
              <input v-model="create_khachhang.ngay_sinh" type="date" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Giới Tính</label>
              <select v-model="create_khachhang.gioi_tinh" class="form-select" aria-label="Default select example">
                  <option selected>Chọn Giới Tính</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
            </div>
                <div class="mb-3">
                <label  for="exampleInputPassword1" class="form-label">Tình Trạng</label>
                <select v-model="create_khachhang.tinh_trang" class="form-select" aria-label="Default select example">
                    <option selected>Chọn Tình Trạng</option>
                    <option value="1">Hoạt Động</option>
                    <option value="2">Khóa</option>
                    </select>
            </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button v-on:click="ThemMoi()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal Xem Chi Tiết Khách Hàng -->
<div class="modal fade" id="XemChiTietModal" tabindex="-1" aria-labelledby="XemChiTietModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title" id="XemChiTietModalLabel">Chi Tiết Khách Hàng</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label fw-bold">Họ Tên:</label>
            <div class="form-control-plaintext">{{ chitiet.ho_ten }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label fw-bold">Số Điện Thoại:</label>
            <div class="form-control-plaintext">{{ chitiet.so_dien_thoai }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label fw-bold">Địa Chỉ:</label>
            <div class="form-control-plaintext">{{ chitiet.dia_chi }}</div>
          </div>
          <div class="col-md-6">
            <label class="form-label fw-bold">Email:</label>
            <div class="form-control-plaintext">{{ chitiet.email }}</div>
          </div>
         
          <div class="col-md-6">
            <label class="form-label fw-bold">Giới Tính:</label>
            <div class="form-control-plaintext">
              <span v-if="chitiet.gioi_tinh == 1">Nam</span>
              <span v-else>Nữ</span>
            </div>
          </div>
          <div class="col-md-6">
            <label class="form-label fw-bold">Tình Trạng:</label>
            <div class="form-control-plaintext text-center w-100">
              <span class="badge" :class="chitiet.tinh_trang == 1 ? 'bg-success' : 'bg-danger'">
                {{ chitiet.tinh_trang == 1 ? 'Hoạt Động' : 'Tạm Tắt' }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list_khachhang:[ ],
      delete_khachhang:{},
      create_khachhang:{
        ho_ten:'',
        so_dien_thoai:'',
        dia_chi:'',
        email:'',
        ngay_sinh:'',
        gioi_tinh:'',
        tinh_trang:'',
      },
      update_khachhang:{
        ho_ten:'',
        so_dien_thoai:'',
        dia_chi:'',
        email:'',
        ngay_sinh:'',
        gioi_tinh:'',
        tinh_trang:'',
      },
      chitiet:{
      }
    
    }
  },
  mounted(){
    this.LoadData();
  },
  methods: {
      LoadData(){
        axios
        .get('http://127.0.0.1:8000/api/khach-hang/data')
        .then(res=>{
          this.list_khachhang=res.data.data;
        });
      },
      Xoa(){
        axios.post('http://127.0.0.1:8000/api/khach-hang/delete',this.delete_khachhang)
        .then(res=>{
          if(res.data.status){
            this.$toast.success("Xóa Thành Công");
               this.LoadData();
          }
          else{
            this.$toast.error("Xóa Thất Bại");
          }
        })
      },
      ThemMoi(){
        axios
        .post('http://127.0.0.1:8000/api/khach-hang/create',this.create_khachhang)
        .then(res=>{
          if(res.data.status){
            this.$toast.success("Thêm Mới Thành Công");
               this.LoadData();
            this.create_khachhang={
              ho_ten:'',
              so_dien_thoai:'',
              dia_chi:'',
              email:'',
              ngay_sinh:'',
              gioi_tinh:'',
              tinh_trang:'',
            }
          }
          else{
            this.$toast.error("Thêm Mới Thất Bại");
          }
        })
      },
      CapNhat(){
        axios
        .post('http://127.0.0.1:8000/api/khach-hang/update',this.update_khachhang)
        .then(res=>{
          if(res.data.status){
            this.$toast.success("Cập Nhật Thành Công");
               this.LoadData();
            this.update_khachhang={
              ho_ten:'',
              so_dien_thoai:'',
              dia_chi:'',
              email:'',
              ngay_sinh:'',
              gioi_tinh:'',
              tinh_trang:'',
            }
          }
          else{
            this.$toast.error("Cập Nhật Thất Bại");
          }
        })
      },
      
  },
}
</script>
<style>
/* Modal Chi Tiết Khách Hàng  */
#XemChiTietModal .modal-header {
  background: linear-gradient(90degrgb(189, 32, 252)f3 0%, #fa0be6 100%);
  color: #fff;
  border-bottom: none;
}
#XemChiTietModal .modal-content {
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(33, 203, 243, 0.15);
}
#XemChiTietModal .form-label {
  color: #1976d2;
  font-size: 1rem;
}
#XemChiTietModal .form-control-plaintext {
  font-size: 1.08rem;
  color: #222;
  background: #f8fafd;
  border-radius: 6px;
  padding: 8px 12px;
  margin-bottom: 6px;
  border: 1px solid #e3eaf1;
}
#XemChiTietModal .badge.bg-success {
  background: #19d12e !important;
}
#XemChiTietModal .badge.bg-danger {
  background: #f44336 !important;
}
</style>