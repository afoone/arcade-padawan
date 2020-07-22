import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Usuario from '../views/Usuario.vue'
import ListaUsuario from '../components/ListaUsuario.vue'
import Login from '../components/Login.vue'
import Ahorcado from '../components/juegos/Ahorcado.vue'
import Juego from '../components/juegos/Juego.vue'
import MemoryGame from '../components/juegos/MemoryGame'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acerca-de',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/usuario',
    name: 'UserList',
    component: Usuario
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/listaUsuario',
    name: 'listadoUsers',
    component: ListaUsuario,
   },
   { path: '/juegos/palabras',
   name: 'Juego',
   component: Juego
 },
  {
    path: '/juegos/ahorcado',
    name: 'Ahorcado',
    component: Ahorcado
  },
  {
    path: '/juegos/memory',
    name: 'MemoryGame',
    component: MemoryGame
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
