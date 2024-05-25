<template>
  <div class="container my-5">
    <h2 class="mb-4">Produse noi</h2>
    <div class="row">
      <product-card v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  props: {
    searchQuery: String
  },
  data() {
    return {
      products: [
        {
          id: '1',
          name: 'Grătar Cu Plită Pătrată VOON 100M CORTEN',
          oldPrice: '8,250.00',
          newPrice: '7,590.00',
          image: 'path/to/image1.jpg'
        },
        {
          id: '2',
          name: 'Grătar Cu Plită Pătrată VOON 100M BLACK',
          oldPrice: '8,250.00',
          newPrice: '7,590.00',
          image: 'path/to/image2.jpg'
        }
        // Add other products here
      ]
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      }
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
