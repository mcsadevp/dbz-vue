<template>
  <div class="body">
    <swiper :slides-per-view="5" :space-between="10" :loop="true" :autoplay="{ delay: 3000 }" :breakpoints="breakpoints"
      class="mySwiper">
      <swiper-slide v-for="(personaje, index) in filteredCharacters" :key="index">
        <div class="card">
          <h2>{{ personaje.nombre }}</h2>
          <img :src="personaje.img" :alt="personaje.nombre" class="base-image" />
          <div class="button-container">
            <button class="button-container-card">
              <p class="p-card" @click="goToInfoPage(personaje.id)">Saber Más</p>
            </button>
            <button class="button-container-card" @click="goToTransformation(personaje.id)">
              <p class="p-card">Versiones</p>
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import axios from 'axios';

export default {
  name: 'CardCarrousel',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    isHero: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      personajes: [],
      breakpoints: {
        300: { slidesPerView: 1.2,spaceBetween:10 },
        400: { slidesPerView: 1.5,spaceBetween:10},
        500: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 2.2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        950: { slidesPerView: 4, spaceBetween: 20 },
        1100: { slidesPerView: 4.5, spaceBetween: 20 },
        1180: { slidesPerView: 4.5, spaceBetween: 10 },
      },
    };
  },
  computed: {
    filteredCharacters() {
      return this.personajes.filter(personaje => personaje.hero === this.isHero);
    },
  },
  async mounted() {
    try {
      const response = await axios.get('/api/personajes.json');
      this.personajes = response.data;
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  },
  methods: {
    goToTransformation(id) {
      this.$router.push({ name: 'TransformationView', params: { id } });
    },
    goToInfoPage(id) {
      this.$router.push({ name: 'InfoPageView', params: { id } });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");


.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.card {
  position: relative;
  width: 225px;
  height: 480px;
  margin: 15px;
  overflow: auto;
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
  background: linear-gradient(to right, #d4b061, #9b0505);
  background-clip: text;
  /* Propiedad estándar */
  -webkit-background-clip: text;
  /* Para compatibilidad con WebKit (Safari, Chrome, iOS) */
  -webkit-text-fill-color: transparent;
  /* Necesario para que funcione en WebKit */
  color: transparent;
  /* Propiedad estándar */
  pointer-events: none;
  z-index: 1;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: absolute;
  bottom: 15px;
  width: 80%;
}

.button-container-card {
  width: 100%;
  background-color: rgba(4, 48, 134, 0.781);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 8px rgba(15, 31, 63, 0.82);
  transition: transform 0.2s, box-shadow 0.2s;
}

.p-card {
  
  font-size: 1.3rem;
  background: linear-gradient(to right, #d4b061, #9b0505);
  background-clip: text;
  /* Propiedad estándar */
  -webkit-background-clip: text;
  /* Para compatibilidad con WebKit (Safari, Chrome, iOS) */
  -webkit-text-fill-color: transparent;
  /* Necesario para que funcione en WebKit */
  color: transparent;
  /* Propiedad estándar */
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
  object-fit: contain;

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

  0%,
  50% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }
}
</style>