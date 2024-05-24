import { createStore } from 'vuex'
import api from '../services/api'

export default createStore({
  state: {
    cart: [],
    user: null,
    token: null
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    SET_USER(state, user) {
      state.user = user
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    LOGOUT(state) {
      state.user = null
      state.token = null
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId)
    },
    async login({ commit }, credentials) {
      try {
        const response = await api.post('/login', credentials)
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.token)
      } catch (error) {
        console.error('Failed to login:', error)
      }
    },
    async register({ commit }, userData) {
      try {
        const response = await api.post('/register', userData)
        commit('SET_USER', response.data.user)
        commit('SET_TOKEN', response.data.token)
      } catch (error) {
        console.error('Failed to register:', error)
      }
    },
    logout({ commit }) {
      commit('LOGOUT')
    },
    checkout({ state }) {
      // Implementați logica de checkout aici
      console.log('Checkout', state.cart)
    }
  },
  getters: {
    cart: state => state.cart,
    totalPrice: state => state.cart.reduce((total, product) => total + product.price, 0),
    isAuthenticated: state => !!state.user
  }
})
