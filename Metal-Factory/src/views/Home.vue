<template>
    <div>
      <section class="hero">
        <div class="container">
          <h1>Welcome to My Online Store</h1>
          <p>Your one-stop shop for all your needs</p>
        </div>
      </section>
      <section class="products mt-5">
        <div class="container">
          <h2>Featured Products</h2>
          <ProductList />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue'
  
  export default {
    name: 'Home',
    components: {
      ProductList
    }
  }
  </script>
  
  <style scoped>
  .hero {
    background-color: #f8f9fa;
    padding: 40px 0;
    text-align: center;
  }
  </style>
  