<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header @search="setSearchQuery" />
    <main class="flex-grow-1">
      <router-view :searchQuery="searchQuery" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    setSearchQuery(query) {
      this.searchQuery = query;
    }
  }
};
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
</style>
