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
                    <table class="table table-bordered align-middle text-center">
                        <thead class="text-center align-middle bg-primary text-light">
                            <tr>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Tìm Kiếm">
                                    <button class="btn btn-primary">Tìm Kiếm</button>
                                </div>
                            </tr>
                            <tr>
                                <th>#</th>
                                <th>Họ Tên</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Email</th>
                                <th>CCCD</th>
                                <th>Giới Tính</th>
                                <th>Tình Trạng</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Nguyễn Văn A</td>
                                <td>0123456789</td>
                                <td>Hà Nội</td>
                                <td>nguyenvana@gmail.com</td>
                                <td>0123456789</td>
                                <td>Nam</td>
                                <td><button class="btn btn-success">Hoạt Động</button></td>
                                <td>
                                    <button  data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning me-1"><i
                                            class="fa-solid fa-circle-info ms-1"></i>Xem</button>
                                    <button data-bs-toggle="modal" data-bs-target="#CapNhapModal" class="btn btn-primary me-1"><i
                                            class="fa-solid fa-pen-to-square"></i>Cập Nhập</button>
                                    <button data-bs-toggle="modal" data-bs-target="#XoaModal" class="btn btn-danger"><i class="fa-solid fa-trash"></i>Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
            Bạn Có Chắc Muốn Xóa Khách Hàng Này Không?
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Xóa Khách Hàng</button>
      </div>
    </div>
  </div>
</div>
<!-- CapNhapModal -->
<div class="modal fade" id="CapNhapModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhập Khách Hàng</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Họ Tên</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Số Điện Thoại</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Địa Chỉ</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">CCCD</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Giới Tính</label>
              <select class="form-select" aria-label="Default select example">
                  <option selected>Chọn Giới Tính</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
            </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tình Trạng</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Chọn Tình Trạng</option>
                    <option value="1">Hoạt Động</option>
                    <option value="2">Khóa</option>
                    </select>
            </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
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
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Số Điện Thoại</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Địa Chỉ</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">CCCD</label>
              <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
             <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Giới Tính</label>
              <select class="form-select" aria-label="Default select example">
                  <option selected>Chọn Giới Tính</option>
                  <option value="1">Nam</option>
                  <option value="2">Nữ</option>
                </select>
            </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tình Trạng</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Chọn Tình Trạng</option>
                    <option value="1">Hoạt Động</option>
                    <option value="2">Khóa</option>
                    </select>
            </div>
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Thêm Mới</button>
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