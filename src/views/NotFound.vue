<template>
  <h1>404</h1>
  <h2>The page you're looking for is not here.</h2>
  <h3>Go back home:
    <button @click="goHome">&#127968;</button>
    you're drunk
  </h3>
</template>

<script>

function goHome() {
  this.$router.push({ name: 'Home' })
}

export default {
  name: 'NotFound',
  methods: {
    goHome: goHome
  }
}
</script>

<style>

</style>
