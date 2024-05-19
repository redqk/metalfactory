<template>
  <div class="cart-container">
    <Header />
    <div class="main-content">
      <h1>Shopping Cart</h1>
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <p>{{ item.name }} - ${{ item.price }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
        <p>Total: ${{ totalPrice }}</p>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components: {
    Header
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalPrice'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'checkout'])
  }
}
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 10px;
}

button {
  cursor: pointer;
}
</style>
