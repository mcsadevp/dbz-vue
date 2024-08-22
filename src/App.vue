<template>
   <div>
    <router-view/>
  <nav>
    <NavMenu />
  </nav>
  <section></section>
</div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
  }
}
</script>
<style>
/* Reset */
* {
  box-sizing: border-box;
  position: relative;
  min-width: 0;
}

.body {
  min-height: 100dvh;
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
  background: linear-gradient(to bottom, #1c4595, #060614);
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;

}
</style>
