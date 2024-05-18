<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="form-group mt-3">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary mt-4">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // Implementare autentificare
      try {
        const response = await api.post('/login', {
          email: this.email,
          password: this.password
        })
        console.log('Login successful:', response.data)
      } catch (error) {
        console.error('Login failed:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Adaugă stilurile tale aici */
</style>
