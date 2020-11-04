<template>
  <NavBar />
    <main>
      <router-view></router-view>
    </main>
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

main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 30px;
    height: 79vh;

    @media (max-width: $phoneWidth) {
        margin-top: 0;
        height: auto;
    }

    @media (max-height: 900px) {
        margin-top: 10px;
    }

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
