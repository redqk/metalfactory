<template>
    <div class="product-details">
      <Header />
      <div v-if="product">
        <h2>{{ product.name }}</h2>
        <p>Price: ${{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
        <!-- Alte detalii despre produs pot fi adăugate aici -->
      </div>
      <div v-else>
        <p>Product not found</p>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'ProductDetails',
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapGetters(['getProductById']),
      product() {
        return this.getProductById(this.$route.params.id)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Stilizare specifică pentru pagina Detalii Produs */
  </style>
  