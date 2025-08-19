<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Player from "@/components/Player.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Главная</RouterLink> |
        <RouterLink to="/about">О нас</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <Player/>
  </footer>
</template>