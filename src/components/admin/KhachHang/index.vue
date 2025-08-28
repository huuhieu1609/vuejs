<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
                            <button class="btn btn-primary"><i class="fa-solid fa-plus"></i> Thêm Mới</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered align-middle text-center">
                        <thead class="text-center align-middle bg-primary text-light">
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
                                    <button class="btn btn-warning me-1"><i class="fa-solid fa-circle-info ms-1"></i></button>
                                    <button class="btn btn-primary me-1"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <button class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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