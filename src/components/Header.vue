<template>
  <header class="header navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="Metal Factory" height="40" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link custom-nav-link">
              <i class="fa fa-home"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link custom-nav-link">
              <i class="fa fa-box"></i> Products
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link custom-nav-link">
              <i class="fa fa-info-circle"></i> About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link custom-nav-link">
              <i class="fa fa-envelope"></i> Contact
            </router-link>
          </li>
          <li class="nav-item d-lg-none">
            <router-link to="/cart" class="nav-link custom-nav-link">
              <i class="fa fa-shopping-cart"></i> Cart
            </router-link>
          </li>
        </ul>
        <div class="d-flex flex-column flex-lg-row align-items-lg-center ms-auto">
          <div class="auth-buttons d-flex flex-column flex-md-row align-items-start align-items-md-center mb-2 mb-lg-0 me-lg-3">
            <router-link to="/login" class="btn btn-link custom-btn">
              <i class="fa fa-sign-in-alt"></i> Login
            </router-link>
            <router-link to="/register" class="btn btn-link custom-btn">
              <i class="fa fa-user-plus"></i> Register
            </router-link>
          </div>
          <router-link to="/cart" class="btn btn-link custom-btn d-none d-lg-block">
            <i class="fa fa-shopping-cart"></i> Cart
          </router-link>
          <form class="d-flex w-100 w-lg-auto" @submit.prevent="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Caută produse..."
              aria-label="Search"
              v-model="searchQuery"
            />
            <button class="btn btn-outline-success" type="button" @click="search">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand img {
  height: 40px;
}

.form-control {
  width: 100%;
}

.custom-btn,
.custom-nav-link {
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.custom-btn:hover,
.custom-nav-link:hover {
  text-decoration: underline;
}

.custom-btn i,
.custom-nav-link i {
  margin-right: 5px;
}

@media (min-width: 992px) {
  .form-control {
    width: auto;
  }
}
</style>
