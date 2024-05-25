<template>
  <div class="col-md-4">
    <div class="card h-100">
      <img :src="product.image" class="card-img-top" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          <span class="text-muted text-decoration-line-through">{{ product.oldPrice }} lei</span>
          <br>
          <span class="fw-bold">{{ product.newPrice }} lei</span>
        </p>
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="btn btn-primary">Selectează opțiunile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
