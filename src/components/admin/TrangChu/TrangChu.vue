<template>
  <div class="home-main">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <img class="hero-bg" src="https://sunrisehotel.webhotel.vn/files/images/rooms/junior-suite/Family-(1).jpg" alt="Rooms" />
      <div class="hero-content">
        <h1>Rooms</h1>
        <p>Với phòng nghỉ rộng rãi, thoải mái cùng đội ngũ nhân viên tận tâm, chu đáo, Sunrise Hotel chắc chắn sẽ mang đến cho du khách những giây phút nghỉ ngơi tuyệt vời nhất.</p>
        <button class="hero-btn">Tìm thêm tại đây</button>
        
      </div>
        
    </section>
    <!-- Location Breadcrumb -->
   <div class="hero-booking-bar">
         <div class="row text-nowrap">
            <div class="col-lg-3"> <button class="booking-btn reserve ">Đặt chỗ ngay</button> </div>
            <div class="col-lg-3"> <div class="booking-date"><i class="bx bx-calendar"></i> Check-in</div></div>
            <div class="col-lg-3"><div class="booking-date"><i class="bx bx-calendar"></i> Check-out</div></div>
            <div class="col-lg-3"><button class="booking-btn check">Kiểm tra tình trạng sẵn có</button></div>
         </div>
        </div>

    <!-- Accommodation Banner Slider -->
    <section class="accommodation-section">
      <h2 class="section-title">THANH LỊCH <span>CHỖ Ở</span></h2>
      <div class="accommodation-slider">
        <div class="slide-img left-blur"></div>
        <div class="slide-img main">
          <div class="slide-info">
            <h3>Phòng Junior Suite</h3>
            <p>Các phòng rộng rãi, ấm cúng và được bố trí hợp lý trên diện tích 69 m², với hai phòng thông nhau. Tông màu tươi sáng của các phòng hài hòa.</p>
            <button class="btn-detail">VIEW </button>
          </div>
          <img src="https://sunrisehotel.webhotel.vn/files/images/rooms/junior-suite/Family-(1).jpg" alt="Junior Suite" />
        </div>
        <div class="slide-img right-blur"></div>
      </div>
      <button class="btn-view-all">View all rooms <span>+</span></button>
    </section>

    <!-- Special Offers -->
    <section class="offers-section">
      <h2 class="section-title">FEATURED <span>SPECIAL OFFERS</span></h2>
      <div class="offers-list">
        <div class="offer-card">
          <img src="https://sunrisehotel.webhotel.vn/files/images/rooms/junior-suite/Family-(1).jpg" alt="Honeymoon" class="img-fuild" />
          <h4>HONEY MOON PACKAGE</h4>
          <p>To welcome lasting and complete happiness, Sunrise Hotel offers a "Sweet Honeymoon"..</p>
          <div class="offer-actions">
            <button class="btn-inquiry">Send an inquiry <span>&rarr;</span></button>
            <button class="btn-discover">DISCOVER MORE</button>
          </div>
        </div>
        <div class="offer-card">
          <img src="https://sunrisehotel.webhotel.vn/files/images/rooms/junior-suite/Family-(1).jpg" alt="Suitcase"  class="img-fuild"/>
          <h4>PICK UP YOUR SUITCASE AND GO</h4>
          <p>Overnight stay in luxurious CONNECTING ROOM with panoramic city view</p>
          <div class="offer-actions">
            <button class="btn-inquiry">Send an inquiry <span>&rarr;</span></button>
            <button class="btn-discover">DISCOVER MORE</button>
          </div>
        </div>
        <div class="offer-card">
          <img src="https://sunrisehotel.webhotel.vn/files/images/rooms/junior-suite/Family-(1).jpg" alt="New Year"  class="img-fuild"/>
          <h4>BRILLIANT TO HAPPY NEW YEAR</h4>
          <p>Promotion room rate 60% OFF from 2,500,000 VND to only 990,000 VND/room/night</p>
          <div class="offer-actions">
            <button class="btn-inquiry">Send an inquiry <span>&rarr;</span></button>
            <button class="btn-discover">DISCOVER MORE</button>
          </div>
        </div>
      </div>
      <button class="btn-view-all">View all offers <span>+</span></button>
    </section>
  </div>
</template>

<script>
import { onMounted, ref, defineComponent } from 'vue';


export default defineComponent({
  name: 'CozeChat',
  components: {
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
});
</script>


<style scoped>
.hero-banner {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 480px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  background: #222;
}
.hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.85);
}
.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #fff;
  text-align: center;
  width: 100%;
  max-width: 700px;
  padding: 0 16px;
}
.hero-content h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 18px;
  letter-spacing: 2px;
  text-shadow: 0 2px 16px rgba(0,0,0,0.25);
}
.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 22px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.hero-btn {
  background: #b08d4a;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 28px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.2s;
}
.hero-btn:hover {
  background: #a0761a;
}
.hero-booking-bar {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
  min-height: 54px;
  transform: translateY(50%);
  padding: 0 12px;
}
.booking-btn {
  background: #fff;
  color: #b08d4a;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  font-size: 1rem;
  padding: 10px 32px;
  margin: 0 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
}
.booking-btn.reserve {
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #eee;
}
.booking-btn.check {
  background: #b08d4a;
  color: #fff;
  border-radius: 0 0 4px 0;
  border-left: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(176,141,74,0.10);
}
.booking-btn.check:hover {
  background: #a0761a;
}
.booking-date {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #222;
  background: #faf8f3;
  border-radius: 2px;
  padding: 0 18px;
  margin: 0 8px;
  min-width: 120px;
  height: 44px;
  justify-content: center;
  border: 1px solid #eee;
}
.booking-date i {
  margin-right: 6px;
  color: #b08d4a;
  font-size: 1.2em;
}
@media (max-width: 900px) {
  .hero-content h1 { font-size: 2rem; }
  .hero-content { max-width: 95vw; }
  .hero-booking-bar { flex-direction: column; width: 98%; padding: 8px 2px; }
  .booking-date, .booking-btn { margin: 6px 0; width: 90%; max-width: 300px; }
}
.home-main {
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #fff;
  color: #222;
}


.location-bar {
   
  display: flex;
  gap: 16px;
  padding: 18px 0 8px 0;
  border-bottom: 1px solid #eee;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  color: #888;
  margin-bottom: 18px;
}
.location-item {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fafafa;
  border-radius: 20px;
  padding: 4px 16px;
  border: 1px solid #e0e0e0;
}
.accommodation-section {
  margin: 32px 0 48px 0;
  text-align: center;
}
.section-title {
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 24px;
  color: #222;
}
.section-title span {
  display: block;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: #222;
  margin-top: 2px;
}
.accommodation-slider {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 0;
  margin-bottom: 18px;
  min-height: 320px;
}
.slide-img {
  flex: 1 1 0;
  background: #f3f3f3;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.slide-img.left-blur,
.slide-img.right-blur {
  background: linear-gradient(90deg, #fff 60%, #e0e0e0 100%);
  opacity: 0.5;
  filter: blur(2px);
}
.slide-img.main {
  flex: 2 1 0;
  position: relative;
  background: #fff;
  box-shadow: 0 6px 32px rgba(0,0,0,0.08);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide-img.main img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
  filter: brightness(0.95);
}
.slide-info {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(30,30,30,0.55);
  color: #fff;
  padding: 32px 24px 24px 24px;
  border-radius: 0 0 8px 8px;
  z-index: 2;
  text-align: left;
  max-width: 70%;
  margin: 0 auto;
}
.slide-info h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.slide-info p {
  font-size: 1rem;
  margin-bottom: 16px;
}
.btn-detail {
  background: #f7b731;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 22px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-detail:hover {
  background: #e67e22;
}
.btn-view-all {
  margin-top: 18px;
  background: #fff;
  color: #222;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 7px 22px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-view-all span {
  font-size: 1.2em;
  font-weight: 700;
  margin-left: 4px;
}
.btn-view-all:hover {
  background: #f7b731;
  color: #fff;
  border-color: #f7b731;
}
.offers-section {
  margin: 48px 0 64px 0;
  text-align: center;
}
.offers-list {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.offer-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  padding: 0 0 24px 0;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
}
.offer-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  position: fixed;
}
.offer-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 18px 0 8px 0;
  color: #222;
}
.offer-card p {
  font-size: 0.98rem;
  color: #666;
  margin-bottom: 18px;
  padding: 0 12px;
}
.offer-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.btn-inquiry {
  background: #f7b731;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 7px 16px;
  font-weight: 500;
  font-size: 0.98rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
}
.btn-inquiry:hover {
  background: #e67e22;
}
.btn-discover {
  background: #fff;
  color: #222;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 7px 16px;
  font-weight: 500;
  font-size: 0.98rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-discover:hover {
  background: #f7b731;
  color: #fff;
  border-color: #f7b731;
}
@media (max-width: 1100px) {
  .offers-list {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .offer-card {
    width: 90vw;
    max-width: 400px;
  }
}
@media (max-width: 700px) {
  .accommodation-slider {
    flex-direction: column;
    min-height: 200px;
  }
  .slide-img.main img {
    height: 180px;
  }
  .slide-info {
    max-width: 95%;
    padding: 18px 8px 12px 8px;
    font-size: 0.95rem;
  }
}
</style>
