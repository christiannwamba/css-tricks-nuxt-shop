<template>
  <div class="product-list">
    <app-h2>Our Products</app-h2>
    <div class="products">
      <app-product v-for="product in products" :key="product.id" :product="product"></app-product>
    </div>
  </div>
</template>

<style>
.product-list {
  text-align: center;
  margin: 5rem;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

<script>
import product from './product'
import h2 from './h2'
export default {
  props: ['products'],
  components: {
    'app-product': product,
    'app-h2': h2
  }
}
</script>