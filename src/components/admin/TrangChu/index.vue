<template>
    <div>
        <div class="container-fluid mt-4">
            <div class="row g-4 mb-4">
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-primary text-white shadow-sm h-100">
                        <div class="card-body d-flex align-items-center">
                            <div class="stats-icon me-3">
                                <i class="fas fa-book fs-1"></i>
                            </div>
                            <div>
                                <h3 class="mb-0 fw-bold">{{ totalBooks.toLocaleString() }}</h3>
                                <p class="mb-0 opacity-75">Tổng Sách</p>
                                <small class="opacity-50">
                                    <i class="fas fa-arrow-up me-1"></i>+12% so với tháng trước
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="card bg-success text-white shadow-sm h-100">
                        <div class="card-body d-flex align-items-center">
                            <div class="stats-icon me-3">
                                <i class="fas fa-shopping-cart fs-1"></i>
                            </div>
                            <div>
                                <h3 class="mb-0 fw-bold">{{ soldBooks.toLocaleString() }}</h3>
                                <p class="mb-0 opacity-75">Đã Bán</p>
                                <small class="opacity-50">
                                    <i class="fas fa-arrow-up me-1"></i>+8% so với tháng trước
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="card bg-warning text-white shadow-sm h-100">
                        <div class="card-body d-flex align-items-center">
                            <div class="stats-icon me-3">
                                <i class="fas fa-warehouse fs-1"></i>
                            </div>
                            <div>
                                <h3 class="mb-0 fw-bold">{{ stockBooks.toLocaleString() }}</h3>
                                <p class="mb-0 opacity-75">Tồn Kho</p>
                                <small class="opacity-50">
                                    <i class="fas fa-arrow-down me-1"></i>-5% so với tháng trước
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3 col-md-6">
                    <div class="card bg-info text-white shadow-sm h-100">
                        <div class="card-body d-flex align-items-center">
                            <div class="stats-icon me-3">
                                <i class="fas fa-dollar-sign fs-1"></i>
                            </div>
                            <div>
                                <h3 class="mb-0 fw-bold">{{ revenue.toLocaleString() }}₫</h3>
                                <p class="mb-0 opacity-75">Doanh Thu</p>
                                <small class="opacity-50">
                                    <i class="fas fa-arrow-up me-1"></i>+15% so với tháng trước
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Charts & Analytics -->
            <div class="row mb-4">
                <div class="col-lg-8">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white d-flex justify-content-between align-items-center">
                            <div>
                                <h5 class="mb-0">
                                    <i class="fas fa-chart-line text-primary me-2"></i>
                                    Doanh Số Bán Hàng
                                </h5>
                                <small class="text-muted">12 tháng gần nhất</small>
                            </div>
                            <div class="btn-group btn-group-sm">
                                <button class="btn btn-outline-primary active">12 Tháng</button>
                                <button class="btn btn-outline-primary">6 Tháng</button>
                                <button class="btn btn-outline-primary">3 Tháng</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <Bar :data="chartData" :options="chartOptions" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card shadow-sm h-100">
                        <div class="card-header bg-white">
                            <h5 class="mb-0">
                                <i class="fas fa-layer-group text-success me-2"></i>
                                Thống Kê Thể Loại
                            </h5>
                        </div>
                        <div class="card-body">
                            <div v-for="category in categories" :key="category.name" class="mb-4">
                                <div class="d-flex justify-content-between mb-2">
                                    <div class="d-flex align-items-center">
                                        <div class="rounded-circle me-2" :class="category.color"
                                            style="width: 12px; height: 12px;"></div>
                                        <span class="fw-semibold">{{ category.name }}</span>
                                    </div>
                                    <span class="text-muted">{{ category.count }} sách</span>
                                </div>
                                <div class="progress" style="height: 8px;">
                                    <div class="progress-bar" :class="category.color"
                                        :style="`width: ${category.percentage}%`"></div>
                                </div>
                                <small class="text-muted">{{ category.percentage }}% tổng số sách</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card shadow-sm">
                        <div class="card-header bg-white">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="mb-0">
                                        <i class="fas fa-list text-info me-2"></i>
                                        Danh Sách Sách ({{ filteredBooks.length }})
                                    </h5>
                                </div>
                                <div class="col-auto">
                                    <div class="btn-group btn-group-sm">
                                        <button class="btn btn-outline-secondary"
                                            :class="{ active: viewMode === 'grid' }" @click="viewMode = 'grid'">
                                            <i class="fas fa-th"></i>
                                        </button>
                                        <button class="btn btn-outline-secondary"
                                            :class="{ active: viewMode === 'list' }" @click="viewMode = 'list'">
                                            <i class="fas fa-list"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- Search & Filter -->
                            <div class="row mb-4">
                                <div class="col-md-4">
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i class="fas fa-search"></i>
                                        </span>
                                        <input v-model="searchTerm" type="text" class="form-control"
                                            placeholder="Tìm kiếm sách, tác giả...">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <select v-model="selectedCategory" class="form-select">
                                        <option value="">Tất cả thể loại</option>
                                        <option v-for="cat in categories" :key="cat.name" :value="cat.name">
                                            {{ cat.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select v-model="stockFilter" class="form-select">
                                        <option value="">Tất cả trạng thái</option>
                                        <option value="in-stock">Còn hàng</option>
                                        <option value="low-stock">Sắp hết</option>
                                        <option value="out-of-stock">Hết hàng</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select v-model="sortBy" class="form-select">
                                        <option value="title">Tên A-Z</option>
                                        <option value="price">Giá tăng</option>
                                        <option value="price-desc">Giá giảm</option>
                                        <option value="stock">Tồn kho</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Books Grid/List View -->
                            <div v-if="viewMode === 'grid'" class="row g-4">
                                <div v-for="book in paginatedBooks" :key="book.id" class="col-lg-4 col-md-6">
                                    <div class="card h-100 book-card">
                                        <div class="position-relative">
                                            <img :src="book.image" :alt="book.title" class="card-img-top book-image">
                                            <div class="position-absolute top-0 end-0 p-2">
                                                <span class="badge" :class="getStockBadgeClass(book.stock)">
                                                    {{ getStockText(book.stock) }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <h6 class="card-title fw-bold">{{ book.title }}</h6>
                                            <p class="text-muted small mb-2">{{ book.author }}</p>
                                            <p class="card-text small text-truncate">{{ book.description }}</p>
                                            <div class="d-flex justify-content-between align-items-center mb-3">
                                                <span class="text-success fw-bold fs-5">{{ book.price.toLocaleString()
                                                }}₫</span>
                                                <span class="badge bg-secondary">{{ book.category }}</span>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <small class="text-muted">Tồn: {{ book.stock }}</small>
                                                <div class="btn-group btn-group-sm">
                                                    <button class="btn btn-outline-primary" @click="editBook(book)">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <button class="btn btn-outline-danger" @click="deleteBook(book.id)">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="table-responsive">
                                <table class="table table-hover table-bordered">
                                    <thead class="table-light">
                                        <tr class="text-center">

                                            <th>Tên Sách</th>
                                            <th>Tác Giả</th>
                                            <th>Thể Loại</th>
                                            <th>Giá</th>
                                            <th>Tồn Kho</th>
                                            <th>Trạng Thái</th>
                                            <th width="120">Thao Tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="book in paginatedBooks" :key="book.id">

                                            <td class="fw-semibold text-center">{{ book.title }}</td>
                                            <td>{{ book.author }}</td>
                                            <td>

                                                <button class="btn btn-secondary w-100">{{ book.category }}</button>
                                            </td>
                                            <td class="text-end  fw-bold"><b>{{ book.price.toLocaleString() }}</b> ₫
                                            </td>
                                            <td class="text-center">
                                                <span class="badge" :class="getStockBadgeClass(book.stock)">
                                                    {{ book.stock }}
                                                </span>
                                            </td>
                                            <td class="text-center">
                                                <span class="badge"
                                                    :class="book.stock > 0 ? 'bg-success' : 'bg-danger'">
                                                    {{ book.stock > 0 ? 'Còn hàng' : 'Hết hàng' }}
                                                </span>
                                            </td>
                                            <td>
                                                <div class="btn-group btn-group-sm">
                                                    <button class="btn btn-outline-info" @click="viewBook(book)">
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                    <button class="btn btn-outline-primary" @click="editBook(book)">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                    <button class="btn btn-outline-danger" @click="deleteBook(book.id)">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Pagination -->
                            <nav v-if="totalPages > 1" class="mt-4">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                        <button class="page-link" @click="currentPage = 1">Đầu</button>
                                    </li>
                                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                                        <button class="page-link" @click="currentPage--">‹</button>
                                    </li>
                                    <li v-for="page in visiblePages" :key="page" class="page-item"
                                        :class="{ active: page === currentPage }">
                                        <button class="page-link" @click="currentPage = page">{{ page }}</button>
                                    </li>
                                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                        <button class="page-link" @click="currentPage++">›</button>
                                    </li>
                                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                                        <button class="page-link" @click="currentPage = totalPages">Cuối</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add/Edit Book Modal -->
        <div v-if="showAddModal" class="modal d-block" tabindex="-1"
            style="background: rgba(0,0,0,0.5); z-index: 1050;">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="fas fa-book me-2"></i>
                            {{ editingBook ? 'Sửa Thông Tin Sách' : 'Thêm Sách Mới' }}
                        </h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="saveBook">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-semibold">
                                            <i class="fas fa-heading me-1"></i>
                                            Tên Sách *
                                        </label>
                                        <input v-model="bookForm.title" type="text" class="form-control" required
                                            placeholder="Nhập tên sách">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-semibold">
                                            <i class="fas fa-user-edit me-1"></i>
                                            Tác Giả *
                                        </label>
                                        <input v-model="bookForm.author" type="text" class="form-control" required
                                            placeholder="Nhập tên tác giả">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-semibold">
                                            <i class="fas fa-tags me-1"></i>
                                            Thể Loại *
                                        </label>
                                        <select v-model="bookForm.category" class="form-select" required>
                                            <option value="">Chọn thể loại</option>
                                            <option v-for="cat in categories" :key="cat.name" :value="cat.name">
                                                {{ cat.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-semibold">
                                            <i class="fas fa-dollar-sign me-1"></i>
                                            Giá (VNĐ) *
                                        </label>
                                        <input v-model.number="bookForm.price" type="number" class="form-control"
                                            required min="0" step="1000" placeholder="0">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-semibold">
                                            <i class="fas fa-boxes me-1"></i>
                                            Số Lượng Tồn Kho *
                                        </label>
                                        <input v-model.number="bookForm.stock" type="number" class="form-control"
                                            required min="0" placeholder="0">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-semibold">
                                            <i class="fas fa-image me-1"></i>
                                            URL Ảnh
                                        </label>
                                        <input v-model="bookForm.image" type="url" class="form-control"
                                            placeholder="https://example.com/image.jpg">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">
                                    <i class="fas fa-align-left me-1"></i>
                                    Mô Tả
                                </label>
                                <textarea v-model="bookForm.description" class="form-control" rows="3"
                                    placeholder="Nhập mô tả sách..."></textarea>
                            </div>

                            <!-- Preview if image URL provided -->
                            <div v-if="bookForm.image" class="mb-3">
                                <label class="form-label fw-semibold">Xem Trước:</label>
                                <div class="text-center">
                                    <img :src="bookForm.image" alt="Preview" class="img-thumbnail"
                                        style="max-height: 200px;">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">
                            <i class="fas fa-times me-1"></i>
                            Hủy
                        </button>
                        <button type="button" class="btn btn-primary" @click="saveBook">
                            <i class="fas fa-save me-1"></i>
                            {{ editingBook ? 'Cập Nhật' : 'Thêm Mới' }}
                        </button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import { onMounted, ref, defineComponent } from 'vue';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
    name: 'CozeChat',
    components: {
        Bar,
        AiAdvisoryNotification: {
      template: `
          <div class="fixed bottom-24 right-4 z-50 max-w-xs bg-white shadow-lg rounded-lg p-4 border flex items-start">
            <MessageCircleQuestion class="text-blue-600 mr-3 flex-shrink-0" size="24" />
            <div>
              <p class="text-sm font-medium text-gray-900 mb-2">Tư vấn bằng Ai</p>
            </div>
          </div>
        `,
    },
    },
    data() {
        return {
            viewMode: 'list',
            showAddModal: false,
            editingBook: null,
            searchTerm: '',
            selectedCategory: '',
            stockFilter: '',
            sortBy: 'title',
            currentPage: 1,
            itemsPerPage: 10,

            // Stats data
            totalBooks: 1547,
            soldBooks: 1203,
            stockBooks: 344,
            revenue: 89456000,

            // Categories with detailed info
            categories: [
                { name: 'Tiểu thuyết', percentage: 35, count: 541, color: 'bg-primary' },
                { name: 'Khoa học', percentage: 28, count: 433, color: 'bg-success' },
                { name: 'Kinh tế', percentage: 20, count: 309, color: 'bg-warning' },
                { name: 'Văn học', percentage: 17, count: 264, color: 'bg-info' }
            ],

            // Sample books data
            books: [
                {
                    id: 1,
                    title: 'Đắc Nhân Tâm',
                    author: 'Dale Carnegie',
                    category: 'Kinh tế',
                    price: 89000,
                    stock: 25,
                    image: 'https://via.placeholder.com/300x400/007bff/ffffff?text=Đắc+Nhân+Tâm',
                    description: 'Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử'
                },
                {
                    id: 2,
                    title: 'Sapiens: Lược sử loài người',
                    author: 'Yuval Noah Harari',
                    category: 'Khoa học',
                    price: 156000,
                    stock: 15,
                    image: 'https://via.placeholder.com/300x400/28a745/ffffff?text=Sapiens',
                    description: 'Câu chuyện về sự tiến hóa của loài người từ thời tiền sử đến hiện tại'
                },
                {
                    id: 3,
                    title: 'Truyện Kiều',
                    author: 'Nguyễn Du',
                    category: 'Văn học',
                    price: 45000,
                    stock: 0,
                    image: 'https://via.placeholder.com/300x400/dc3545/ffffff?text=Truyện+Kiều',
                    description: 'Tác phẩm văn học kinh điển của Việt Nam'
                },
                {
                    id: 4,
                    title: 'Tư Duy Nhanh Và Chậm',
                    author: 'Daniel Kahneman',
                    category: 'Khoa học',
                    price: 198000,
                    stock: 8,
                    image: 'https://via.placeholder.com/300x400/ffc107/000000?text=Tư+Duy',
                    description: 'Khám phá cách thức hoạt động của bộ não con người'
                },
                {
                    id: 5,
                    title: 'Nhà Giả Kim',
                    author: 'Paulo Coelho',
                    category: 'Tiểu thuyết',
                    price: 79000,
                    stock: 32,
                    image: 'https://via.placeholder.com/300x400/17a2b8/ffffff?text=Nhà+Giả+Kim',
                    description: 'Hành trình tìm kiếm kho báu và ý nghĩa cuộc sống'
                },
                {
                    id: 6,
                    title: 'Dế Mèn Phiêu Lưu Ký',
                    author: 'Tô Hoài',
                    category: 'Văn học',
                    price: 35000,
                    stock: 45,
                    image: 'https://via.placeholder.com/300x400/6610f2/ffffff?text=Dế+Mèn',
                    description: 'Tác phẩm văn học thiếu nhi kinh điển'
                }
            ],

            // Form data
            bookForm: {
                title: '',
                author: '',
                category: '',
                price: 0,
                stock: 0,
                image: '',
                description: ''
            },
            chartData: {
                labels: [
                    'Khoa học',
                    'Văn học',
                    'Lịch sử',
                    'Công nghệ',
                    'Kinh tế',
                    'Tâm lý',
                    'Giáo dục',
                    'Truyện tranh',
                    'Tiểu thuyết',
                    'Y học',
                    'Du lịch',
                    'Nghệ thuật'
                ],
                datasets: [
                    {
                        label: 'Số lượng sách tồn kho',
                        data: [120, 80, 45, 60, 90, 70, 55, 150, 100, 30, 25, 40],
                        backgroundColor: '#667eea'
                    }
                ]

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
            },
        }
    },
      setup() {
    const isCozeLoaded = ref(false);
    const isAdminDashboard = ref(window.location.pathname === "/");

    onMounted(() => {
      const script = document.createElement('script');
      script.src = 'https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.0.0-beta.4/libs/oversea/index.js';
      script.async = true;

      script.onload = () => {
        if (window.CozeWebSDK) {
          new window.CozeWebSDK.WebChatClient({
            config: {
              bot_id: '7456995142441353234',
            },
            componentProps: {
              title: 'Trợ Lý AI',
            },
          });
          isCozeLoaded.value = true;
        }
      };

      script.onerror = () => {
        console.error('Failed to load Coze SDK');
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    });

    return {
      isCozeLoaded,
      isAdminDashboard,
    };
  },

    computed: {
        filteredBooks() {
            let filtered = this.books;

            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase();
                filtered = filtered.filter(book =>
                    book.title.toLowerCase().includes(term) ||
                    book.author.toLowerCase().includes(term) ||
                    book.description.toLowerCase().includes(term)
                );
            }

            if (this.selectedCategory) {
                filtered = filtered.filter(book => book.category === this.selectedCategory);
            }

            if (this.stockFilter) {
                switch (this.stockFilter) {
                    case 'in-stock':
                        filtered = filtered.filter(book => book.stock > 10);
                        break;
                    case 'low-stock':
                        filtered = filtered.filter(book => book.stock > 0 && book.stock <= 10);
                        break;
                    case 'out-of-stock':
                        filtered = filtered.filter(book => book.stock === 0);
                        break;
                }
            }

            // Sort
            switch (this.sortBy) {
                case 'title':
                    filtered.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'price':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'stock':
                    filtered.sort((a, b) => b.stock - a.stock);
                    break;
            }

            return filtered;
        },

        totalPages() {
            return Math.ceil(this.filteredBooks.length / this.itemsPerPage);
        },

        paginatedBooks() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredBooks.slice(start, end);
        },

        visiblePages() {
            const pages = [];
            const maxVisible = 5;
            const half = Math.floor(maxVisible / 2);
            let start = Math.max(1, this.currentPage - half);
            let end = Math.min(this.totalPages, start + maxVisible - 1);

            if (end - start < maxVisible - 1) {
                start = Math.max(1, end - maxVisible + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            return pages;
        }
    },

    watch: {
        searchTerm() {
            this.currentPage = 1;
        },
        selectedCategory() {
            this.currentPage = 1;
        },
        stockFilter() {
            this.currentPage = 1;
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.initChart();
        });
    },

    methods: {
        initChart() {
            const ctx = document.getElementById('salesChart');
            if (!ctx) return;

            new Chart(ctx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
                    datasets: [{
                        label: 'Doanh số (triệu VNĐ)',
                        data: [12, 19, 15, 25, 22, 30, 28, 35, 32, 40, 38, 45],
                        borderColor: '#007bff',
                        backgroundColor: 'rgba(0, 123, 255, 0.1)',
                        tension: 0.4,
                        fill: true,
                        pointBackgroundColor: '#007bff',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff'
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    }
                }
            });
        },

        getStockBadgeClass(stock) {
            if (stock > 10) return 'bg-success';
            if (stock > 0) return 'bg-warning text-dark';
            return 'bg-danger';
        },

        getStockText(stock) {
            if (stock > 10) return 'Còn hàng';
            if (stock > 0) return 'Sắp hết';
            return 'Hết hàng';
        },

        viewBook(book) {
            alert(`Xem chi tiết sách: ${book.title}\nTác giả: ${book.author}\nMô tả: ${book.description}`);
        },

        editBook(book) {
            this.editingBook = book;
            this.bookForm = { ...book };
            this.showAddModal = true;
        },

        deleteBook(id) {
            if (confirm('Bạn có chắc muốn xóa sách này?')) {
                this.books = this.books.filter(book => book.id !== id);
                // Show success message
                this.showAlert('Đã xóa sách thành công!', 'success');
            }
        },

        saveBook() {
            if (this.editingBook) {
                // Update existing book
                const index = this.books.findIndex(book => book.id === this.editingBook.id);
                if (index !== -1) {
                    this.books[index] = { ...this.bookForm };
                    this.showAlert('Đã cập nhật sách thành công!', 'success');
                }
            } else {
                // Add new book
                this.bookForm.id = Date.now();
                this.books.unshift({ ...this.bookForm });
                this.showAlert('Đã thêm sách mới thành công!', 'success');
            }

            this.closeModal();
        },

        closeModal() {
            this.showAddModal = false;
            this.editingBook = null;
            this.bookForm = {
                title: '',
                author: '',
                category: '',
                price: 0,
                stock: 0,
                image: '',
                description: ''
            };
        },

        exportData() {
            // Simulate export
            this.showAlert('Đang xuất dữ liệu...', 'info');
            setTimeout(() => {
                this.showAlert('Xuất dữ liệu thành công!', 'success');
            }, 1500);
        },

        importData() {
            // Simulate import
            this.showAlert('Chức năng nhập dữ liệu đang phát triển', 'warning');
        },

        generateReport() {
            // Simulate report generation
            this.showAlert('Đang tạo báo cáo...', 'info');
            setTimeout(() => {
                this.showAlert('Báo cáo đã được tạo thành công!', 'success');
            }, 2000);
        },

        showAlert(message, type) {
            // Simple alert implementation
            const alertClass = {
                'success': 'alert-success',
                'warning': 'alert-warning',
                'info': 'alert-info',
                'danger': 'alert-danger'
            }[type] || 'alert-info';

            const alertDiv = document.createElement('div');
            alertDiv.className = `alert ${alertClass} alert-dismissible fade show position-fixed`;
            alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
            alertDiv.innerHTML = `
                        ${message}
                        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
                    `;

            document.body.appendChild(alertDiv);

            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.remove();
                }
            }, 5000);
        }
    }

})
</script>
<style scoped>
.stats-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
}

.book-thumbnail {
    width: 50px;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;
}

.book-image {
    height: 250px;
    object-fit: cover;
}

.book-card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.modal {
    z-index: 1050;
}

.bg-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
}

.bg-success {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
}

.bg-warning {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%) !important;
}

.bg-info {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%) !important;
}

.table th {
    border-top: none;
    font-weight: 600;
    color: #495057;
}

.pagination .page-link {
    border-radius: 6px;
    margin: 0 2px;
    border: 1px solid #dee2e6;
}

.pagination .page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
}
</style>
