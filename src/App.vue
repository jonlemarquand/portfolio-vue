<template>
  <NavBar />
    <router-view></router-view>
  <Footer />
</template>

<script>
import Footer from './components/UI/Footer.vue'
import NavBar from './components/UI/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,700|Open+Sans&amp;display=swap');

body {
  margin: 0;
  padding: 0;
  background: $white;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

h1, h2 {
    font-family: $primaryFont;
    color: $dblue;

    a {
        color: $lblue;
        text-decoration: none;
    }
}

h1 {
    font-size: 24px;
    font-weight: 700;

    @media (max-width: $phoneWidth) {
        font-size: 18px;
    }
}

h2 {
    font-size: 18px;
    font-weight: 500;
    @media (max-width: $phoneWidth) {
        font-size: 16px;
    }
    &.intro-text {
        @media (max-height: 641px) {
            display: none;
        }
    }
}

:focus {
    outline: $lblue 3px solid;
}
</style>
