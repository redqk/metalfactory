<template>
    <div class="shopping-cart">
      <Header />
      <h1>Shopping Cart</h1>
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <p>{{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
          <input type="number" v-model.number="item.quantity" min="1" @change="updateQuantity(item.id, item.quantity)">
        </div>
        <p>Total: ${{ totalPrice }}</p>
        <button @click="checkout">Checkout</button>
        <button @click="clearCart">Clear Cart</button>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'ShoppingCart',
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapState(['cart']),
      ...mapGetters(['totalPrice'])
    },
    methods: {
      ...mapActions(['removeFromCart', 'updateQuantity', 'checkout', 'clearCart'])
    }
  }
  </script>
  
  <style scoped>
  /* Stilizare specifică pentru componenta ShoppingCart.vue */
  </style>
  