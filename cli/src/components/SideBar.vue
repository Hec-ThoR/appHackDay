<template>

  <el-menu
    :default-active="path"
    :router="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#f3a500">
      <el-menu-item v-for="item in menu" :index="item.path" :key="item.path" >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      path: '/',
      menu: [
        { path: '/home', label: 'Inicio', icon: 'el-icon-star-off' },
        { path: '/docente', label: 'Docente', icon: 'el-icon-warning' },
        { path: '/ambiente', label: 'Ambiente', icon: 'el-icon-location' },
        { path: '/about', label: 'About', icon: 'el-icon-phone-outline' },
        { path: '/', label: 'Salir', icon: 'el-icon-menu' }
      ]
    }
  },
  mounted () {
    this.path = this.$route.path
  }
}
</script>

<style scoped>
  .el-menu {
    border-right: solid 1px #e61209;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
  }
</style>
