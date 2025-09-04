<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()

  console.log(route.query.foo)
</script>

<template>
  <h1>{{route.query.genre}}</h1>
</template>

<style scoped>

</style>