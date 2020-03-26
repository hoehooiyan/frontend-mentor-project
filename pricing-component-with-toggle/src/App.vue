<template>
  <div id="app">
    <h1 class="site-title">Our pricing</h1>
    <Toggle />
  </div>
</template>

<script>
import Toggle from './components/Toggle'

export default {
  name: 'app',
  components: {
    Toggle
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import './assets/scss/_global.scss';

h1 {
  color: $red;
}
</style>
