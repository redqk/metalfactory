<template>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text text-muted">
            <del>{{ product.oldPrice }} lei</del>
            <br>
            <strong>{{ product.newPrice }} lei</strong>
          </p>
          <button @click="selectProduct" class="btn btn-primary">Selectează opțiunile</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object
    },
    methods: {
      selectProduct() {
        this.$emit('selectProduct', this.product.id);
      }
    }
  }
  </script>
  