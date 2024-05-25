<template>
  <div class="container my-5" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" class="img-fluid" :alt="product.name">
      </div>
      <div class="col-md-6">
        <h2>{{ product.name }}</h2>
        <p>
          <span class="text-muted text-decoration-line-through">{{ product.oldPrice }} lei</span>
          <br>
          <span class="fw-bold">{{ product.newPrice }} lei</span>
        </p>
        <p>This is a detailed description of the product with ID {{ product.id }}.</p>
        <h5>Accesorii</h5>
        <ul>
          <li v-for="accessory in product.accessories" :key="accessory">{{ accessory }}</li>
        </ul>
        <div>
          <label for="quantity">Cantitate:</label>
          <input type="number" id="quantity" v-model.number="quantity" min="1" class="form-control w-25">
        </div>
        <button class="btn btn-primary mt-3" @click="addToCart">Adaugă în coș</button>
        <p class="mt-3">
          <strong>SKU:</strong> {{ product.sku }}
          <br>
          <strong>Categorie:</strong> {{ product.category }}
        </p>
      </div>
    </div>
    <div class="mt-5">
      <h3>DESCRIERE</h3>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading product details...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      quantity: 1
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    }
  },
  methods: {
    fetchProduct() {
      const products = [
        {
          id: '1',
          name: 'Grătar Cu Plită Pătrată VOON 100M CORTEN',
          oldPrice: '8,250.00',
          newPrice: '7,590.00',
          image: 'path/to/image1.jpg',
          accessories: ['Accessory 1', 'Accessory 2', 'Accessory 3'],
          sku: 'SQ-100M-C',
          category: 'Gratare',
          description: 'This is the long description of the product, including all details and specifications.'
        },
        {
          id: '2',
          name: 'Grătar Cu Plită Pătrată VOON 100M BLACK',
          oldPrice: '8,250.00',
          newPrice: '7,590.00',
          image: 'path/to/image2.jpg',
          accessories: ['Accessory A', 'Accessory B', 'Accessory C'],
          sku: 'SQ-100M-B',
          category: 'Gratare',
          description: 'descriere de verificare'
        },
        {
          id: '3',
          name: 'Grătar Cu Plită Pătrată VOON 100M BLACK',
          oldPrice: '8,250.00',
          newPrice: '7,590.00',
          image: 'path/to/image2.jpg',
          accessories: ['Accessory A', 'Accessory B', 'Accessory C'],
          sku: 'SQ-100M-B',
          category: 'Gratare',
          description: 'descriere de verificare la produsul cu id 3'
        },
      ];
      this.product = products.find(p => p.id === this.productId);
    },
    addToCart() {
      // Logic to add the product to the cart
      alert(`Added ${this.quantity} of ${this.product.name} to cart`);
    }
  },
  watch: {
    productId() {
      this.fetchProduct();
    }
  },
  mounted() {
    this.fetchProduct();
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
