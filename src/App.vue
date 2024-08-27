<template>
  <div id="app">
    <LoadingSpinner :isLoading="isLoading" />
    <nav>
      <NavMenu />
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NavMenu from './components/NavMenu.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
    LoadingSpinner,
  },
  computed: {
    ...mapState(['loading']),
  },
};
</script>

<style>
/* Reset */
* {
  box-sizing: border-box;
  position: relative;
  min-width: 0;
}

h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

/* Global Styles */
#app {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(to bottom, #3f7efa,#012263 , #07071f);
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;
  width: 100%;
}
</style>
