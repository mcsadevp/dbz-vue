<template>
  <div>
    <!-- Spinner Overlay -->
    <div v-if="showSpinner" class="spinner-overlay">
      <img :src="loadingImage" alt="Loading..." />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    id: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    showSpinner() {
      return this.isLoading;
    },
    loadingImage() {
      // Check if there's an id to determine which image to use
      if (this.id) {
        return this.getLoadingImageForId();
      }
      // Default loading image if no id is present
      return '../../public/api/img/icon-nav.png'; // Cambia esto a la ruta de tu imagen por defecto
    },
  },
  methods: {
    getLoadingImageForId() {

      return '/path/to/loading-image-based-on-id.png'; // Cambia esto a la ruta de la imagen basada en el id
    },
  },
};
</script>


<style scoped>
/* Agrega aquí los estilos para el overlay y el spinner si es necesario */
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner img {
  width: 50px;
  height: 50px;
}
</style>


<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  /* Azul oscuro con opacidad */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  /* Efecto de difuminado */
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner img {
  width: 100px;
  height: 100px;
}
</style>
