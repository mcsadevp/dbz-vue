<template>
  <div>
    <!-- Spinner Overlay -->
    <LoadingSpinner :isLoading="showSpinner" :id="$route.params.id" />

    <!-- Contenido del Componente -->
    <div v-if="!showSpinner">
      <div class="title-container">
        <h2 class="title-text">{{ personaje.nombre }}</h2>
      </div>
      <div class="cards-container">
        <div class="card" v-for="(version, index) in personaje.versiones" :key="index">
          <div class="card">
            <h2>{{ version.nombre }}</h2>
            <img :src="version.img" :alt="version.nombre" class="base-image" @load="handleImageLoad" />
            <img v-if="version.ss" src="../../public/api/img/ki4.png" alt="Rayos" class="overlay-image" />
                    <img v-if="version.ss" src="../../public/api/img/ki.png" alt="ki" class="overlay-image" />
                    <img v-if="version.ss2" src="../../public/api/img/ki6.png" alt="Rayos" class="overlay-image" />
                    <img v-if="version.ss2" src="../../public/api/img/ki7.png" alt="ki" class="overlay-image" />
                    <img v-if="version.ss2" src="../../public/api/img/ki9.png" alt="ki" class="overlay-image" />
          </div>
          <div class="button-container">
            <button class="button-container-card">
              <p class="p-card" @click="goToInfoPage(version.id)">Saber Más</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  name: 'CardStatic',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      personaje: {},
      showSpinner: false,
    };
  },
  async created() {
    const id = this.$route.params.id;
    const hasSeenSpinner = localStorage.getItem(`spinnerShown_${id}`);

    if (!hasSeenSpinner) {
      this.showSpinner = true;
      this.$store.dispatch('setLoading', true);

      try {
        await this.fetchData();
        this.personaje = this.$store.getters.personajes.find(personaje => personaje.id === parseInt(id));
      } catch (error) {
        console.error('Error fetching character data:', error);
      } finally {
        setTimeout(() => {
          this.$store.dispatch('setLoading', false);
          this.showSpinner = false;
          localStorage.setItem(`spinnerShown_${id}`, 'true');
        }, 1500); // Asegura que el spinner se muestre por al menos 1500 ms
      }
    } else {
      this.$store.dispatch('setLoading', false);
      this.showSpinner = false;
      this.personaje = this.$store.getters.personajes.find(personaje => personaje.id === parseInt(id));
    }
  },
  methods: {
    ...mapActions(['fetchData']),
    handleImageLoad() {
      if (this.showSpinner) {
        this.$store.dispatch('setLoading', false);
        this.showSpinner = false;
      }
    },
    goToInfoPage(versionId) {
      this.$router.push({ name: 'InfoPageView', params: { id: versionId } });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");

.title-container{
   text-align: center;
    margin: 5px 0;
    margin-top: 6rem;
  }
  
  
  .title-text {
    font-size: 7rem;
    background: linear-gradient(to right, #d4b061, #9b0505);
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
    height: 465px;
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
    font-size: 1.7rem;
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
    font-size: 1.4rem;
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
    margin-top: -55px;
    width: 150%;
    height: 200%;
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