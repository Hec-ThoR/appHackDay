import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/Layout'
const _import = require('./_import_' + process.env.NODE_ENV) // importa todos los archivos vue

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: _import('login/index')
    },
    {
      path: '/home',
      component: layout,
      redirect: 'home',
      children: [{
        path: '/home',
        component: _import('home/index'),
        name: 'home',
        meta: { title: 'home', noCache: true }
      }]
    },
    {
      path: '/docente',
      component: layout,
      redirect: 'doncente',
      children: [{
        path: '/docente',
        component: _import('docente/index'),
        name: 'docente',
        meta: { title: 'docente', noCache: true }
      }]
    },
    {
      path: '/ambiente',
      component: layout,
      redirect: 'ambiente',
      children: [{
        path: '/ambiente',
        component: _import('ambiente/index'),
        name: 'ambiente',
        meta: { title: 'ambiente', noCache: true }
      }]
    },
    {
      path: '/about',
      component: layout,
      redirect: 'about',
      children: [{
        path: '/about',
        component: _import('about/index'),
        name: 'about',
        meta: { title: 'about', noCache: true }
      }]
    }
  ]
})
