<template>
  <div class="card h-100">
    <img :src="product.image" class="card-img-top" :alt="product.name">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text mt-auto">${{ product.price }}</p>
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="btn btn-primary mt-3">View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
}
</style>
