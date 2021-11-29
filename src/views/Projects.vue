<template>
  <h1>Projects</h1>
  <div v-for="project in projects" v-bind:key="project.id" class="project">
    <h2>
      <router-link :to="{
        name: 'ProjectDetails',
        params: { slug: project.id },
      }">
        {{project.name}}
      </router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {id: 'angular', name: 'Angular project'},
        {id: 'react', name: 'React project'},
        {id: 'vue', name: 'Vue project'}
      ]
    }
  }
}
</script>

<style>
.project h2 {
  background: #f4f4f4;
  padding: 1em;
  border-radius: 5px;
  margin: 10px auto;
  max-width: 20em;
  cursor: pointer;
  color: #444;
}

.project a {
  text-decoration: none;
}

.project h2:hover {
  background: #ddd;
}
</style>
