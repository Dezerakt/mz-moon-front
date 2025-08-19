<script setup lang="ts">
</script>

<template>
  <div>
    <h1>Главная страница</h1>
    <p>Добро пожаловать!</p>

    <n-card title="Card with Cover">
      <template #cover>
        <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
      </template>
      Card Content
    </n-card>
  </div>
</template>

<style scoped>
  .n-card {
    max-width: 300px;
  }
</style>

