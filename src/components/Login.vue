<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main-container">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      // Implementare login
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem; /* Ajustează valoarea pentru a controla cât de jos să fie formularul */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
