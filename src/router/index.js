import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
        {
        path : '/',
        component: ()=>import('../components/admin/TrangChu/TrangChu.vue')
    },
    {
        path : '/nhan-vien',
        component: ()=>import('../components/admin/nhanvien/index.vue')
    },
    {
        path : '/phong',
        component: ()=>import('../components/admin/loaiphong/index.vue')
    },
    {
        path : '/phan-quyen',
        component: ()=>import('../components/admin/phanquyen/index.vue')
    },
    {
        path : '/Thong-Ke',
        component: ()=>import('../components/admin/ThongKe/index.vue')
    },
    {
        path : '/',
        component: ()=>import('../components/admin/ThongKe/index.vue')
    },
     {
        path : '/danh-sach-khach-hang',
        component: ()=>import('../components/admin/KhachHang/index.vue')
    },
      {
        path : '/dich-vu',
        component: ()=>import('../components/admin/DichVu/DichVuList.vue')
    },
     {
        path : '/profile',
        component: ()=>import('../components/admin/profile/index.vue')
    },
    


    //blank
  
   
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router