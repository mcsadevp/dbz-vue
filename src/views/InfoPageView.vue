<template>
  <section class="body">
    <div class="title-container-img">
      <img :src="currentImage" :alt="currentName" />
      <div class="content">
        <h3 class="title-history">{{ currentName }}</h3>
        <p class="p-history">{{ currentDescription }}</p>
        <h3 class="title-history">Power</h3>
        <p class="p-history">{{ currentPower }}</p>
        <h3 class="title-history">Attack</h3>
        <p class="p-history">{{ currentAttack }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'InfoPageVue',
  data() {
    return {
      currentVersion: {},
      personaje: {},
    };
  },
  computed: {
    currentImage() {
      return this.currentVersion.page || this.personaje.page || '';
    },
    currentName() {
      return this.currentVersion.nombre || this.personaje.nombre || '';
    },
    currentDescription() {
      return this.currentVersion.descripcion || this.personaje.descripcion || '';
    },
    currentPower() {
      return this.currentVersion.poder || this.personaje.poder || '';
    },
    currentAttack() {
      return this.currentVersion.ataque || this.personaje.ataque || '';
    }
  },
  async created() {
    const id = parseInt(this.$route.params.id);

    if (!this.$store.getters.cacheLoaded) {
      this.$store.dispatch('setLoading', true);
      try {
        await this.fetchData();
        const allPersonajes = this.$store.getters.personajes;
        let found = false;

        for (const personaje of allPersonajes) {
          const version = personaje.versiones.find(v => v.id === id);
          if (version) {
            this.currentVersion = version;
            this.personaje = personaje;
            found = true;
            break;
          }
        }

        if (!found) {
          this.personaje = allPersonajes.find(personaje => personaje.id === id);
          if (this.personaje) {
            this.currentVersion = {};
          }
        }
      } catch (error) {
        console.error('Error fetching character data:', error);
      } finally {
        setTimeout(() => {
          this.$store.dispatch('setLoading', false);
        }, 1000);
      }
    } else {
      this.$store.dispatch('setLoading', false);
      const allPersonajes = this.$store.getters.personajes;
      let found = false;

      for (const personaje of allPersonajes) {
        const version = personaje.versiones.find(v => v.id === id);
        if (version) {
          this.currentVersion = version;
          this.personaje = personaje;
          found = true;
          break;
        }
      }

      if (!found) {
        this.personaje = allPersonajes.find(personaje => personaje.id === id);
        if (this.personaje) {
          this.currentVersion = {};
        }
      }
    }
  },
  methods: {
    ...mapActions(['fetchData'])
  }
};
</script>



  <style scoped>
  .body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom, #1c4595, #060614);
        font-family: "Luckiest Guy", cursive;
        font-weight: 400;
        font-style: normal;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
      }
      .title-container-img {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 85%;
        overflow: hidden;
        text-align: right;
      }

      .title-container-img img {
        width: auto;
        height: 100%;
        object-fit: contain;
        right: 7rem;

      }
      @media (max-width: 768px) {
        .title-container-img img {
          right: 0;
        }
      }

      .content {
        position: absolute;
        bottom: 2rem;
        left: 1rem;
        right: 1.5rem;
        color: white;
        text-align: left;
        padding: 1rem;
        max-width: 90%;
        background: rgba(
          0,
          0,
          0,
          0.7
        ); /* Fondo semitransparente para mejor legibilidad */
        border-radius: 8px;
      }

      .title-history {
        font-size: clamp(1.5rem, 5vw, 3rem);
        margin-bottom: 1rem;
        background: linear-gradient(to right, #ffe02d, #cc2d2d);
        background-clip: text;
        color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .p-history {
        width: 100%;
        font-size: clamp(0.875rem, 3vw, 1.25rem);
        background: linear-gradient(to right, #ffe02d, #cc2d2d);
        background-clip: text;
        color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .content {
        padding: 1rem;
        font-size: clamp(0.75rem, 4vw, 1rem);
        width: 50%;
      }

      @media (max-width: 768px) {
        .content {
          width: 100%;
        }
      }
  </style>