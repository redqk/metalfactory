<template>
    <div class="cart">
      <Header />
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
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { mapState, mapActions, mapGetters } from 'vuex'
  
  export default {
    name: 'Cart',
    components: {
      Header,
      Footer
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
  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  