import Vue from 'vue'
import Vuex from 'vuex'
import api from '/Metal-Factory/src/components/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const product = state.cart.find(item => item.id === productId)
      if (product) {
        product.quantity = quantity
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    updateQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_QUANTITY', { productId, quantity })
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
    async checkout({ state }) {
      try {
        // Implementează logică de checkout aici, cum ar fi trimiterea datelor către un backend
        console.log('Checkout', state.cart)
        // După checkout, poți șterge toate produsele din coș
        commit('CLEAR_CART')
      } catch (error) {
        console.error('Failed to checkout:', error)
      }
    }
  },
  getters: {
    cart: state => state.cart,
    totalPrice: state => state.cart.reduce((total, product) => total + product.price * product.quantity, 0)
  }
})
