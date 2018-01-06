<template>
  <nav>
    <div class="logo">
      <app-h1 is-brand="true">Nuxt Shop</app-h1>
    </div>
    <div class="menu">
      <ul>
        <li>
           <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
           <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav {
  display: flex;
}

.logo {
  background: #7F43C3;
  padding: 15px;
  width: 25%;
  text-align: center
}

.menu {
  text-align: right;
  align-self: center;
  width: 75%;
  padding-right: 10rem;
}

.menu > ul {
  list-style-type: none;
}

.menu > ul > li {
  display: inline-block;
}

.menu > ul > li > a {
  display: block;
  padding: 5px 7px;
  text-decoration: none;
  background: #1CB593;
  color: #fff;
  text-transform: uppercase;
  margin-right: 10px;
  height: 20px;
  line-height: 20px;  
}
.menu > ul > li > a:hover {
  opacity: 0.8;
}
</style>

<script>
import h1 from './h1';
export default {
  components: {
    'app-h1': h1
  }
}
</script>

