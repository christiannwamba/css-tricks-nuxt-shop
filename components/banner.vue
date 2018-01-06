<template>
  <div class="banner">
    <img 
    src="http://res.cloudinary.com/christekh/image/upload/f_auto,q_auto/v1515183359/banner_cfjjl6.png" 
    alt="50% Discount on your first purchase">
    <div class="greeting">
      <app-h1>50% Discount on your first purchase</app-h1>
      <p>We are collaborating with Eloise. Find out some of her quirky and awesome stuffs that we have now made available at out store</p>
    </div>
  </div>
</template>

<style>
.banner {
  margin: 8rem 0;
  position: relative;
}
img {
  width: 100%;
}
.greeting {
  text-align: center;
  position: absolute;
  bottom: -5rem;
  margin: 0 25rem;
  padding: 1rem 2rem;
  background: #fff;
}
</style>

<script>
import h1 from './h1';
export default {
  components: {
    'app-h1': h1
  }
};
</script>