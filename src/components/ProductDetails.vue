<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6">
        <img :src="product.image" alt="Product Image" class="img-fluid">
      </div>
      <div class="col-md-6">
        <h1>{{ product.name }}</h1>
        <p>
          <del>{{ product.oldPrice }} lei</del>
          <br>
          <strong>{{ product.newPrice }} lei</strong>
        </p>
        <p>Alege una dintre variantele de mai jos, în funcție de accesoriile dorite:</p>
        <div class="mb-3">
          <label for="accessories" class="form-label">Accesorii</label>
          <select id="accessories" class="form-select" v-model="selectedAccessory">
            <option v-for="accessory in product.accessories" :key="accessory.id" :value="accessory.id">
              {{ accessory.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="quantity" class="form-label">Cantitate</label>
          <input type="number" id="quantity" class="form-control" v-model.number="quantity" min="1">
        </div>
        <button @click="addToCart" class="btn btn-primary">Adaugă în coș</button>
        <p class="mt-3"><strong>SKU:</strong> {{ product.sku }}</p>
        <p><strong>Categorie:</strong> {{ product.category }}</p>
      </div>
    </div>
    <div class="mt-5">
      <h2>DESCRIERE</h2>
      <p>{{ product.description }}</p>
      <ul>
        <li v-for="(dimension, index) in product.dimensions" :key="index">{{ dimension }}</li>
      </ul>
      <p>{{ product.deliveryTime }}</p>
      <p>{{ product.vatIncluded }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: 'Grătar Cu Plită Pătrată VOON 100M BLACK',
        oldPrice: '8,250.00',
        newPrice: '7,590.00',
        image: 'path/to/image.jpg',
        accessories: [
          { id: 1, name: 'Accessory 1' },
          { id: 2, name: 'Accessory 2' },
          { id: 3, name: 'Accessory 3' }
        ],
        sku: 'SQ-100M-B',
        category: 'Grătare',
        description: 'Acest grătar cu un design aparte este perfect atât pentru a pregăti o masă savuroasă și diversificată...',
        dimensions: [
          'Înălțime bază: 72 cm',
          'Dimensiune bază: 50x50 cm',
          'Înălțime totală: 100 cm',
          'Dimensiuni plită: 98x98 cm',
          'Grosime plită: 10 mm',
          'Diametru decupaj plită: 48 cm',
          'Greutate aproximativă: 130-140 kg',
          'Culoare: Negru'
        ],
        deliveryTime: 'Livrare: 7 zile lucrătoare',
        vatIncluded: 'Prețurile conțin TVA'
      },
      selectedAccessory: null,
      quantity: 1
    }
  },
  methods: {
    addToCart() {
      // Implementarea funcției de adăugare în coș
    }
  }
}
</script>
