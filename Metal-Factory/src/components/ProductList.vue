<template>
  <div>
    <div class="product-list">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    searchQuery: String
  },
  data() {
    return {
      products: [], // Aici vei popula produsele dintr-o sursă externă sau store
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  created() {
    // Populează lista de produse de exemplu printr-un API call sau din store
    // this.products = this.$store.state.products;
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
