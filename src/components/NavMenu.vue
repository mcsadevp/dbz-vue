<template>
  <div class="body">
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container">
        <img
          id="favicon"
          src="../assets/icon-nav.png"
          alt="favicon"
          @mouseenter="rotateIcon"
          :class="{ rotate: isRotating }"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto button-nav">
            <li
              class="nav-item"
              v-for="(item, index) in navItems"
              :key="index"
            >
              <div class="nav-item-container">
                <router-link class="nav-link active" :to="item.link">
                  <button
                    class="button-nav-item"
                    :style="{ backgroundImage: `url(${item.background})` }"
                  ></button>
                  <p class="p-esfera">{{ item.label }}</p>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      isRotating: false,
      navItems: [
        { label: "Inicio", link: "/", background: require('@/assets/esfera-1.png') },
        { label: "Tilte1", link: "/about", background: require('@/assets/esfera-2.png') },
        { label: "Title2", link: "/", background: require('@/assets/esfera-3.png') },
        { label: "Title3", link: "/", background: require('@/assets/esfera-4.png') },
        { label: "Title4", link: "/", background: require('@/assets/esfera-5.png') },
        { label: "Title5", link: "/", background: require('@/assets/esfera-6.png') },
        { label: "Title6", link: "/", background: require('@/assets/esfera-7.png') },
      ],
    };
  },
  methods: {
    rotateIcon() {
      this.isRotating = true;
      setTimeout(() => {
        this.isRotating = false;
      }, 4000); // Duración de la animación en milisegundos
    },
    handleScroll() {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("hidden", window.scrollY !== 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");

@keyframes rotate {
  from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
  }
#favicon {
  height: 5rem;
  margin-bottom: 25px;
  transition-duration: 1s;
}

#favicon.rotate {
  animation: rotate 4s ease-in-out;
  scale: 1.2;
}

.navbar {
  transition: top 0.5s;
}

.navbar.hidden {
  top: -100px;
}

.button-nav {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.nav-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (max-width: 777px) {
  .nav-item-container {
    align-items: flex-end;
  }
}

.button-nav-item {
  border-radius: 100px;
  width: 3rem;
  height: 3rem;
  background-size: 120%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  margin-bottom: -16px;
}

.p-esfera {
  font-size: 20px;
  margin-top: -10px;
  background: linear-gradient(to right, #ffe02d, #cc2d2d);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>