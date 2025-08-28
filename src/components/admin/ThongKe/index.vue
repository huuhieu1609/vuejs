<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header mt-1">
                    <h3>Thống Kê Đặt Phòng</h3>
                </div>
                <div class="card-body">
                    <label for="" class="mt-2">Từ Ngày :</label>
                    <input type="date" class="form-control mt-1">
                    <label for="" class="mt-2">Đến Ngày :</label>
                    <input type="date" class="form-control mt-1">
                </div>
                <div class="card-footer text-end">
                    <button class="btn btn-primary">Lọc</button>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header mt-1">
                    <h3>Lịch Đặt Phòng Tháng Nay</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'AppDashboard',
    components: {
        Bar
    },
    data() {
        return {
            chartData: {
                labels: [
                    'Phòng Họp',
                    'Phòng Làm Việc',
                    'Phòng Hội Nghị',
                    'Phòng Tiếp Khách',
                    'Phòng Giám Đốc',
                    'Phòng Nhân Viên',
                    'Phòng Kỹ Thuật',
                    'Phòng Marketing',
                    'Phòng Kế Toán',
                    'Phòng IT',
                    'Phòng Pháp Chế',
                    'Phòng Hành Chính'
                ],
                datasets: [
                    {
                        label: 'Thông kê Lịch Đặt Phòng',
                        backgroundColor: [
                            '#42A5F5',
                            '#66BB6A',
                            '#FFA726',
                            '#FF7043',
                            '#8D6E63',
                            '#78909C',
                            '#B39DDB',
                            '#FFCA28',
                            '#26C6DA',
                            '#AB47BC',
                            '#7E57C2',
                            '#FF8A65'
                        ],
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ],
            },
            chartOptions: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            },
            stats: {
                tong_lich_hen: 120,
                lich_hen_thang_nay: 25,
                lich_hen_thanh_cong: 100,
                ty_le_thanh_cong: 83,
                danh_gia_trung_binh: 4.5
            }
        }
    }
}
</script>
<style></style>