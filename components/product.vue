<template>
  <div class="product" @click="goToProduct(product.id)">
    <div class="product-card">
      <img :src="product.imgUrl" :alt="product.title">
      <div class="detail">
        <p>{{product.title}}</p>
        <p>${{product.price}}</p>
      </div>
    </div>
    <div class="product-overlay">

    </div>
  </div>
</template>

<style>
.product {
  max-width: 30%;
  flex-basis: 30%;
  position: relative;
  margin-bottom: 2rem;
}

.detail {
  display: flex;
  justify-content: space-between;
}

.product-overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0);
  opacity: 0;
  transition: all 0.1s ease-in-out;
}

.product:hover .product-overlay {
  opacity: 0.4;
  cursor: pointer;
}
</style>

<script>
export default {
  props: ['product'],
  methods: {
    goToProduct(id) {
      this.$router.push('/product/'+id)
    }
  }
}
</script>

