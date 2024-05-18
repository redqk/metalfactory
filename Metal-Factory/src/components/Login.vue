<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      async login() {
        await this.login({ email: this.email, password: this.password })
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adaugă stilurile tale aici */
  </style>
  