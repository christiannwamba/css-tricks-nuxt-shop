<template>
  <div class="main">
    <app-nav></app-nav>
    <nuxt/>
    
  </div>
</template>

<style>
.main {
  height: 100%;
  position: relative;
}
footer {
  background: #7F43C3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
}
.social {
  display: flex;
}
.twitter {
  margin-right: 1rem;
}
</style>


<script>
import nav from '@/components/nav';
export default {
  components: {
    'app-nav': nav
  }
};
</script>
