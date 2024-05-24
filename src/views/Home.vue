<template>
    <div>
      <section class="hero">
        <div class="container">
          <br>
          <h1>Metal Factory</h1>
          <p>Inovatie si calitate romaneasca!</p>
        </div>
      </section>
      <section class="products mt-5">
        <div class="container">
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
  