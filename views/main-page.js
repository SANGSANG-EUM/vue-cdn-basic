const MainPage = {
data() {
  return {
    // Swiper options
    swiperOptions: {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    slides: [
      { id: 1, imageUrl: 'https://via.placeholder.com/2000x300?text=Slide-1' },
      { id: 2, imageUrl: 'https://via.placeholder.com/2000x300?text=Slide-2' },
      { id: 3, imageUrl: 'https://via.placeholder.com/2000x300?text=Slide-3' },
    ],
  };
},
mounted() {
  this.mySwiper = new Swiper('.swiper-container', this.swiperOptions);
},
template: `
<div id="main" class="contents">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
        <img :src="slide.imageUrl" alt="Slide">
      </div>
    </div>
    <div class="swiper-arrow swiper-button-next"></div>
    <div class="swiper-arrow swiper-button-prev"></div>
  </div>
</div>
`,
};