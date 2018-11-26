<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view/>

      <fw-footer></fw-footer>
      <fw-header></fw-header>
      <fw-input></fw-input>
      <fw-list></fw-list>
  </div>
</template>
<script>
import FwHeader from './components/FwHeader.vue'
import FwInput from './components/FwInput.vue'
import FwList from './components/FwList.vue'
import FwFooter from './components/FwFooter.vue'

export default {
  components: {
    FwHeader,
    FwInput,
    FwList,
    FwFooter
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
