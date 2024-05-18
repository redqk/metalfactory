<template>
    <div class="register">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label for="name">Name:</label>
          <input type="text" v-model="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'Register',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['register']),
      async register() {
        await this.register({ name: this.name, email: this.email, password: this.password })
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adaugă stilurile tale aici */
  </style>
  