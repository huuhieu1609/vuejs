<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header d-flex justify-content-between">
                    <h4 class="mt-2"><b>DANH SÁCH NHÂN VIÊN</b></h4>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                        Thêm nhân viên
                    </button>
                </div>
                <div class="row mb-2 mt-2">
                    <div class="col-lg-12">
                        <div class="row me-1">
                            <div class="position-relative search-bar-box input-group" style="width: 100%;">
                            <input type="text" class="form-control search-control"
                                placeholder="Tìm kiếm theo họ tên...">
                            <span class="position-absolute top-50 search-show translate-middle-y"><i
                                    class='bx bx-search'></i></span>
                            <span class="position-absolute top-50 search-close translate-middle-y"><i
                                    class='bx bx-x'></i></span>
                            <button class="btn btn-primary">Tìm Kiếm</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
                                <th >#</th>
                                <th >Họ Và Tên</th>
                                <th >Email</th>
                                <th >Số Điện Thoại</th>
                                <th >Chức Vụ</th>
                                <th >Tình Trạng</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle text-nowrap text-center">
                            <tr>
                                <td >1</td>
                                <td >Nguyễn Văn A</td>
                                <td >vana@gmail.com</td>
                                <td >0123456789</td>
                                <td >Quản Lý</td>
                                <td class="text-center">
                                    <button class="btn btn-success"> Làm Việc</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#caphat">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td >2</td>
                                <td >Lê Thị B</td>
                                <td >thib@gmail.com</td>
                                <td >0123459789</td>
                                <td >Nhân Viên</td>
                                <td class="text-center">
                                    <button class="btn btn-success"> Làm Việc</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#caphat">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td >3</td>
                                <td >Trần Tú lê</td>
                                <td >tule@gmail.com</td>
                                <td >03333456789</td>
                                <td >Tạp Vụ</td>
                                <td class="text-center">
                                    <button class="btn btn-danger">Tạm Nghỉ</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#caphat">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td >4</td>
                                <td >Chương Văn An</td>
                                <td >vana@gmail.com</td>
                                <td >012333456789</td>
                                <td >Nhân viên</td>
                                <td class="text-center">
                                    <button class="btn btn-success">Làm Việc</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#caphat">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr >
                                <td >5</td>
                                <td >Lê Thị C</td>
                                <td >thic@gmail.com</td>
                                <td >012345556789</td>
                                <td >Quản Lý</td>
                                <td class="text-center">
                                    <button class="btn btn-danger">Tạm Nghỉ</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#caphat">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td >6</td>
                                <td >Nguyễn Văn D</td>
                                <td >vad@gmail.com</td>
                                <td >0123885556789</td>
                                <td >Quản Lý</td>
                                <td class="text-center">
                                    <button class="btn btn-danger">Tạm Nghỉ</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                        data-bs-target="#caphat">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal Thêm Nhân Viên -->
    <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalLabel">Thêm Nhân Viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Họ và tên</label>
                            <input type="text" class="form-control" placeholder="Nhập họ tên">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="Nhập email">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" placeholder="Nhập số điện thoại">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Chức vụ</label>
                            <select class="form-control">
                                <option>Quản Lý</option>
                                <option>Nhân Viên</option>
                                <option>Tạp Vụ</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tình trạng</label>
                            <select class="form-control">
                                <option> Làm Việc</option>
                                <option>Tạm Nghỉ</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Cập Nhật Nhân Viên -->
    <div class="modal fade" id="caphat" tabindex="-1" aria-labelledby="caphatLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="caphatLabel">Cập Nhật Nhân Viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Họ và tên</label>
                            <input type="text" class="form-control" value="Nguyễn Văn A">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" value="vana@gmail.com">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Số điện thoại</label>
                            <input type="text" class="form-control" value="0123456789">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Chức vụ</label>
                            <select class="form-control">
                                <option selected>Quản Lý</option>
                                <option>Nhân Viên</option>
                                <option>Tạp Vụ</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tình trạng</label>
                            <select class="form-control">
                                <option selected> Làm Việc</option>
                                <option>Tạm Nghỉ</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa Nhân Viên -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel">Xóa Nhân Viên</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa nhân viên này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
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