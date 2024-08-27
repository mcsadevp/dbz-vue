<template>
  <div class="title-container-img">
    <img src="../../public/api/img/title.png" alt="title" class="title" />
  </div>
  <div class="title-container-text" @mouseenter="animateBackground">
    <h2 class="title-text">HeroZ</h2>
  </div>
  <section>
    <CardCarrousel :isHero="true" />
  </section>
  <div class="title-container-text" @mouseenter="animateBackground">
    <h2 class="title-text">DevilZ</h2>
  </div>
  <section>
    <CardCarrousel :isHero="false" />
  </section>
  <router-view />

  <footer class="footer">
    <div class="container">
      <ul class="footer-nav">
        <li class="nav-item" v-for="(item, index) in navItems" :key="index">
          <div class="footer-item-container">
            <a :href="item.link" class="nav-link active">
              <button class="footer-button-item" :style="{ backgroundImage: `url(${item.background})` }"></button>
              <p class="p-esfera-footer">{{ item.label }}</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
import CardCarrousel from '@/components/CardCarrousel.vue';

export default {
  name: 'HomeView',
  components: {
    CardCarrousel,
  },
  data() {
    return {
      isAnimating: false,
      navItems: [
        { label: "Git Hub", link: "https://github.com", background: require('../../public/api/img/esfera-5.png') },
        { label: "Contacto", link: "mailto:contacto@example.com", background: require('../../public/api/img/esfera-6.png') },
        { label: "LinkedIn", link: "https://www.linkedin.com", background: require('../../public/api/img/esfera-7.png') },
      ],
    };
  },
  methods: {
    animateBackground(event) {
      const element = event.target;
      element.classList.add('animate-bg');
      setTimeout(() => {
        element.classList.remove('animate-bg');
      }, 2000); // Duración de la animación en milisegundos
    },
  },
};
</script>

<style>
.title {
  width: 75%;
  height: auto;
  padding: 50px;
  margin-top: 5rem;
}

.title-container-img {
  text-align: center;
  width: 80%;
}

@media (max-width: 1000px) {
  .title {
    padding: 20px;
  }
}

.title-container-text {
  background-image: url("../../public/api/img/poder.png");
  background-size: 0% 0%;
  background-repeat: no-repeat;
  background-position: left;
  text-align: center;
  transition: background-size 2s;
}

.title-container-text.animate-bg {
  background-size: 140% 150%;
}

.title-text {
  font-size: 7rem;
  background: linear-gradient(to right, #d4b061, #9b0505);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background-color: #060614;
  padding: 20px 0;
  text-align: center;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
  margin-top: 12px;
}

.footer-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer-button-item {
  border-radius: 100px;
  width: 3rem;
  height: 3rem;
  background-size: 133%;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  margin-bottom: -16px;
}


.p-esfera-footer {
  font-size: 2rem;
  margin-top: -10px;
  background: linear-gradient(to right, #d4b061, #9b0505);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width:500px) {
  .p-esfera-footer {
    font-size: 1.5rem;
  }
}
@media (max-width:391px) {
  .p-esfera-footer {
    font-size: 1rem;
  }
}
</style>