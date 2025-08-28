<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    <h3>Thêm Loại Phòng</h3>
                </div>
                <div class="card-body">
                    <form>
                        <label for="name" class="form-label">Tên Loại Phòng</label>
                        <input type="text" class="form-control" id="name" placeholder="Nhập tên loại phòng">
                        <label for="" class="mt-1 mb-1">Slug Loại Phòng</label>
                        <input type="text" class="form-control" id="name" placeholder="slug loại phòng">
                        <label for="name" class="form-label mt-2">Tình Trạng</label>
                        <select class="form-select">
                            <option value="" disabled selected>Chọn tình trạng</option>
                            <option value="1">Đang Sử Dụng</option>
                            <option value="2">Chưa Sử Dụng</option>
                        </select>
                    </form>
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">Thêm Mới</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card radius-10 border-top border-0 border-3 border-info">
                <div class="card-header">
                    <h3>Danh Sách Loại Phòng</h3>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr class="bg-primary text-light text-nowrap">
                                <th class="text-center">#</th>
                                <th class="text-center">Tên Loại Phòng</th>
                                <th class="text-center">Slug Loại Phòng</th>
                                <th class="text-center">Tình Trạng</th>
                                <th class="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">1</td>
                                <td >Phòng Họp</td>
                                <td>Phong-Hop</td>
                                <td class="text-center">
                                    <button class="btn btn-success">Đang Sử Dụng</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#editModal">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td >Phòng Làm Việc</td>
                                <td >Phong-Lam-Viec</td>
                                <td class="text-center">
                                    <button class="btn btn-danger">Chưa Sử Dụng</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#editModal">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">3</td>
                                <td >Phòng Thư Giãn</td>
                            <td >Phong-Thu-Gian</td>
                                <td class="text-center"> <button class="btn btn-danger">Chưa Sử Dụng</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#editModal">Cập Nhật</button>
                                    <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">4</td>
                                <td >Phòng Học</td>
                                <td >Phong-Hoc</td>
                                <td class="text-center">
                                    <button class="btn btn-success">Đang Sử Dụng</button>
                                </td>
                                <td class="text-center">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#editModal">Cập Nhật</button>
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


    <!-- Modal Cập Nhật Loại Phòng -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Cập Nhật Loại Phòng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <label class="form-label">Tên Loại Phòng</label>
                        <input type="text" class="form-control" value="Phòng Họp">
                        <label class="form-label mt-2">Tình Trạng</label>
                        <select class="form-select">
                            <option>Đang Sử Dụng</option>
                            <option>Chưa Sử Dụng</option>
                        </select>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cập Nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa Loại Phòng -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel">Xóa Loại Phòng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                   <div class="alert alert-danger" role="alert">
                            Bạn có chắc muốn xóa <b>Phòng Họp</b>
                            này
                            không?
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style></style>