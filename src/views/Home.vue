<template>
  <div>
    <section class="hero">
      <div class="container-fluid p-0">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/pozalagratar.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/pozalagratar.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/pozalagratar.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
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
  padding: 0;
  text-align: center;
}

.carousel-inner img {
  height: 600px;
  object-fit: cover;
}

.products {
  margin-top: 2rem;
}

.container-fluid {
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
