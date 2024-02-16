import {createRouter, createWebHistory} from 'vue-router'  

import PokemonList from '@/components/PokemonList'
import PokemonView from '@/components/PokemonView'

// Vue.use(VueRouter)

 const routes = [
  {
    path: '/',
    name: 'pokemon-list',
    component: PokemonList
  },
  {
    path: '/view/:name',
    name:'pokemon-view',
    component: PokemonView
  }
  
]

// const router = new VueRouter({
//   mode: 'history',
//    base: process.env.BASE_URL,
//   routes
// })

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
// createApp(App).use(router).mount('#app')


export default router
