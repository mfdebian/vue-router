<template>
  <div id="nav">
    <!-- Hardcoded router-link's 'to' attribute to route's path -->
    <router-link to="/">Home</router-link> |
    <!-- We can bind the router-link 'to' attribute to a route's
    name rather than hardcoding it's path (see router/index.js) -->
    <router-link v-bind:to="{ name: 'About' }">About</router-link> |
    <router-link v-bind:to="{ name: 'Projects' }">Projects</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #35495e;
  text-decoration: none;
  border-radius: 5px;
  padding: 1em;
}

#nav a.router-link-exact-active {
  color: white;
  background: #41b883;
}
</style>
