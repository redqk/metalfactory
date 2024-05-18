<template>
    <div class="product-list">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import ProductItem from './ProductItem.vue'
  
  export default {
    name: 'ProductList',
    components: {
      ProductItem
    },
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', price: 100 },
          { id: 2, name: 'Product 2', price: 200 }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adaugă stilurile tale aici */
  </style>
  