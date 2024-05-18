<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import api from '@/components/services/api' // Folosește alias-ul corect

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
