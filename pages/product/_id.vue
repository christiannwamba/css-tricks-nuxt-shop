<template>
  <div class="product-page">
    <app-h1>{{product.title}}</app-h1>
    <div class="product-sale">
      <div class="image">
        <img :src="product.imgUrl" :alt="product.title">
      </div>
      <div class="description">
        <app-h2>${{product.price}}</app-h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </div>
</template>

<style>
.product-page {
  margin: 5rem auto;
  width: 70%;
}
h1 {
  text-align: center
}
.product-sale {
  display: flex;
  justify-content: space-around;
}
.product-sale .description {
  width: 50%;
}
</style>

<script>
import h1 from '@/components/h1';
import h2 from '@/components/h2';
import data from '@/services/data';
export default {
  asyncData({ params }, callback) {
    setTimeout(() => {
       callback(null,{product: data.find(v => v.id === parseInt(params.id))})
    }, 2000)
  },
  components: {
    'app-h1': h1,
    'app-h2': h2
  },
  middleware: 'auth'
};
</script>