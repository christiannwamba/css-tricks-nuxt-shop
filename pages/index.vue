<template>
  <div>
    <app-banner></app-banner>
    <div class="cta">
      <app-button>Start Shopping</app-button>
    </div>
    <app-product-list :products="products"></app-product-list>
  </div>
</template>

<style>
.cta {
  display: flex;
  justify-content: center;
  margin-top: 10rem;
}
</style>

<script>
import h1 from '@/components/h1';
import banner from '@/components/banner';
import button from '@/components/button';
import productList from '@/components/product-list';
import data from '@/services/data';
export default {
  asyncData({ params }, callback) {
    setTimeout(() => {
      callback(null, { products: data });
    }, 2000);
  },
  components: {
    'app-h1': h1,
    'app-banner': banner,
    'app-button': button,
    'app-product-list': productList
  }
};
</script>

