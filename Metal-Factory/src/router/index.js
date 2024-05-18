import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductDetails from '../components/ProductDetails.vue' // Adaugăm importul pentru pagina de Detalii Produs

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/product/:id', // Definim ruta pentru Detalii Produs cu un parametru pentru id-ul produsului
    name: 'ProductDetails',
    component: ProductDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
