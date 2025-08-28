<template>
   <div>
     <div class="row">
        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    Danh Sách Nhân Viên
                    <div class="input-group mt-3 w-100">
                        <input type="text" v-model="search"
                            class="form-control search-control border border-2 border-secondary"
                            placeholder="Search...">
                        <span class="position-absolute top-50 search-show translate-middle-y" style="left: 15px;"><i
                                class="bx bx-search"></i></span>
                        <button class="btn btn-outline-secondary" type="button">Tìm
                            Kiếm</button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle bg-primary text-light">
                                <tr>
                                    <th>#</th>
                                    <th>Họ Tên</th>
                                    <th>Chức Vụ</th>
                                    <th>Phân Quyền</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td class="text-center ">1</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>Quản Lý</td>
                                    <td class="text-center">
                                        <button class="btn btn-info text-white" data-bs-toggle="modal"
                                            data-bs-target="#phanQuyenModal">Phân Quyền</button>
                                    </td>
                                    <td class="text-center">
                                        <i class="fa-solid fa-square-pen fa-3x text-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#editModal"></i>
                                            <i class="fa-solid fa-trash fa-3x text-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"></i>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td class="text-center">2</td>
                                    <td>Lê Thị B</td>
                                    <td>Nhân Viên</td>
                                    <td class="text-center">
                                        <button class="btn btn-info text-white" data-bs-toggle="modal"
                                            data-bs-target="#phanQuyenModal">Phân Quyền</button>
                                    </td>
                                    <td class="text-center">
                                        <i class="fa-solid fa-square-pen fa-3x text-primary me-2" data-bs-toggle="modal"
                                            data-bs-target="#editModal" ></i>
                                            <i class="fa-solid fa-trash fa-3x text-danger" data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"></i>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
<!-- cập nhật phân quyền -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Nhân Viên</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="" class=" mb-1">Tên Nhân Viên</label>
        <input type="text" class="form-control" placeholder="Nhập tên nhân viên">
        <label for="" class="mt-1 mb-1">Chức Vụ</label>
        <select name="" id="" class="form-select">
            <option value="1">Quản Lý</option>
            <option value="2">Nhân Viên</option>
            <option value="3">Kế Toán</option>
            <option value="4">Kỹ Thuật</option> 
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Cập Nhật</button>
      </div>
    </div>
  </div>
  
</div>
<!-- Xóa -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="alert alert-danger" role="alert">
                            Bạn có chắc muốn xóa <b>Nguyễn Văn A</b>
                            này
                            không?
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Lưu</button>
      </div>
    </div>
  </div>
</div>

        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    Danh Sách Chức Năng
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle bg-primary text-light">
                                <tr>
                                    <th>#</th>
                                    <th>Tên Chức Năng</th>
                                    <th>Cấp Quyền</th>
                                </tr>
                            </thead>
                            <tbody class="align-middle">
                                <tr>
                                    <td class="text-center">1</td>
                                    <td>Quản lý phòng</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">2</td>
                                    <td>Quản lý khách hàng</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">3</td>
                                    <td>Quản lý đặt phòng</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">4</td>
                                    <td>Quản lý báo cáo</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">5</td>
                                    <td>Quản lý thống kê</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">6</td>
                                    <td>Quản lý nhân viên</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">7</td>
                                    <td>Quản lý lịch làm việc</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">8</td>
                                    <td>Quản lý thông báo</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">9</td>
                                    <td>Quản lý tài khoản</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">10</td>
                                    <td>Quản lý cài đặt hệ thống</td>
                                    <td class="text-center">
                                        <button class="btn btn-success">Cấp Quyền</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    Đang Phân Quyền Cho <b class="text-danger">Nguyễn Văn A</b>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="text-center align-middle bg-primary text-light">
                                <tr>
                                    <th>Tên Chức Năng</th>
                                    <th>Quyền</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center align-middle">
                                    <td>Quản lý phòng</td>
                                    <td>Được Phép</td>
                                    <td>
                                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletePhanQuyenModal">Xóa</button>
                                    </td>
                                </tr>
                                <tr class="text-center align-middle">
                                    <td>Quản lý khách hàng</td>
                                 <td>Không  Phép</td>
                                    <td class="text-center">
                                        <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletePhanQuyenModal">Xóa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> 
        <!-- Xóa -->
<div class="modal fade" id="deletePhanQuyenModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="alert alert-danger" role="alert">
                            Bạn có chắc muốn xóa <b>Quản Lý Phòng</b>
                            này
                            không?
                        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary">Lưu</button>
      </div>
    </div>
  </div>
</div>      
    </div> 
    

   </div>
    
</template>
<script>
export default {

}
</script>
<style></style>