<template>
    <div class="body">
      <div class="title-container-img">
        <img src="img/title.png" alt="title" class="title" />
      </div>
  
      <div class="title-container-text">
        <h2 class="title-text">HeroZ</h2>
      </div>
  
      <!-- Carrusel Swiper -->
      <swiper
        :slides-per-view="5"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :breakpoints="breakpoints"
        class="mySwiper"
      >
        <swiper-slide v-for="(character, index) in characters" :key="index">
          <div class="card">
            <h2>{{ character.name }}</h2>
            <img :src="character.image" :alt="character.name" class="base-image" />
            <div class="button-container">
              <button class="button-container-card">
                <p class="p-card">Saber Más</p>
              </button>
              <button class="button-container-card">
                <p class="p-card">Transformaciones</p>
              </button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
  
      <div class="title-container-text">
        <h2 class="title-text">DevilZ</h2>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    name: 'CardCarrousel',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        characters: [
          { name: 'Goku', image: 'https://dragonball-api.com/characters/goku_normal.webp' },
          { name: 'Vegeta', image: 'https://dragonball-api.com/characters/vegeta_normal.webp' },
          { name: 'Goku', image: 'https://dragonball-api.com/characters/goku_normal.webp' },
          { name: 'Vegeta', image: 'https://dragonball-api.com/characters/vegeta_normal.webp' },
          { name: 'Goku', image: 'https://dragonball-api.com/characters/goku_normal.webp' },
          { name: 'Vegeta', image: 'https://dragonball-api.com/characters/vegeta_normal.webp' },
          { name: 'Goku', image: 'https://dragonball-api.com/characters/goku_normal.webp' },
          { name: 'Vegeta', image: 'https://dragonball-api.com/characters/vegeta_normal.webp' },
        ],
        breakpoints: {
          150: { slidesPerView: 1 },
          200: { slidesPerView: 1 },
          400: { slidesPerView: 1 },
          580: { slidesPerView: 2, spaceBetween:10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          980: { slidesPerView: 4, spaceBetween: 20 },
          1100: { slidesPerView: 4, spaceBetween: 40 },
          1180: { slidesPerView: 5, spaceBetween: 10 },
        },
      };
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
  
  .title-container-img,
  .title-container-text {
    text-align: center;
    margin: 5px 0;
  }
  
  .title-container-text {
    background-image: url("../assets/poder.png");
    background-size: 100% 100%;
    width: 100vh;
  }
  
  .title {
    width: 100%;
    height: auto;
  }
  
  .title-text {
    font-size: 7rem;
    background: linear-gradient(to right, #ffe02d, #cc2d2d);
    background: linear-gradient(to right, #ffe02d, #cc2d2d);
    background-clip: text; /* Propiedad estándar */
    -webkit-background-clip: text; /* Para compatibilidad con WebKit (Safari, Chrome, iOS) */
    -webkit-text-fill-color: transparent; /* Necesario para que funcione en WebKit */
    color: transparent; /* Propiedad estándar */
  }
  
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  
  .card {
    position: relative;
    width: 225px;
    height: 450px;
    margin: 15px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #01080a;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }
  
  .card h2 {
    position: absolute;
    top: 10px;
    font-size: 2rem;
    background: linear-gradient(to right, #ffe02d, #cc2d2d);
    background-clip: text; /* Propiedad estándar */
    -webkit-background-clip: text; /* Para compatibilidad con WebKit (Safari, Chrome, iOS) */
    -webkit-text-fill-color: transparent; /* Necesario para que funcione en WebKit */
    color: transparent; /* Propiedad estándar */
    pointer-events: none;
  }
  
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: absolute;
    bottom: 15px;
    width: 90%;
  }
  
  .button-container-card {
    width: 100%;
    background-color: rgba(28, 68, 149, 0.38);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 8px rgba(15, 31, 63, 0.82);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .p-card {
    font-size: 20px;
    background: linear-gradient(to right, #ffe02d, #cc2d2d);
    background-clip: text; /* Propiedad estándar */
    -webkit-background-clip: text; /* Para compatibilidad con WebKit (Safari, Chrome, iOS) */
    -webkit-text-fill-color: transparent; /* Necesario para que funcione en WebKit */
    color: transparent; /* Propiedad estándar */
  }
  
  .button-container-card:active {
    transform: translateY(4px);
    box-shadow: 0 2px rgba(28, 68, 149, 0.67);
  }
  
  .card:hover {
    transform: scale(1.07);
  }
  
  .base-image {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  
  .overlay-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .card:hover .overlay-image {
    opacity: 1;
    animation: fadeInOut 6ms infinite;
  }
  
  @keyframes fadeInOut {
    0%, 50% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
  }
  </style>
  