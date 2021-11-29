<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Go to a random route: 
      <button @click="randomRouteRedirect">&#x1F500;</button>
    </h3>
  </div>
</template>

<script>

function randomRouteRedirect() {
  let randomString = (Math.random() + 1).toString(36).substring(2);
  this.$router.push(randomString)
}

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    randomRouteRedirect: randomRouteRedirect
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
