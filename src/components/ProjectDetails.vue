<template>
  <h1>The id of this project is: {{slug}}</h1>
  <h3>Now go fetch it or something, idk</h3>
  <button @click="goBack">&#11013;</button>
</template>

<script>

function goBack() {
  this.$router.go(-1);
}

export default {
  name: 'ProjectDetails',
  props: {
    slug: String,
  },
  methods: {
    goBack: goBack,
  }
}
</script>

<style>
button {
  font-size: 2em;
}
</style>
