<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive >
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
