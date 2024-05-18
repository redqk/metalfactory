<template>
    <div class="product-list">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import ProductItem from './ProductItem.vue'
  import api from '../components/services/api'
  
  export default {
    name: 'ProductList',
    components: {
      ProductItem
    },
    data() {
      return {
        products: []
      }
    },
    async created() {
      try {
        const response = await api.get('/products')
        this.products = response.data
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adaugă stilurile tale aici */
  </style>
  