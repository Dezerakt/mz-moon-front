<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Song, SongResponse } from '@/types/Song'

  // reactive variable to hold data
  const backUrl = import.meta.env.VITE_API_URL
  const songs = ref<Song[] | null>(null)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      const res = await fetch(`${backUrl}/catalog/song`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data: SongResponse = await res.json()
      songs.value = data.data

    } catch (err) {
      error.value = (err as Error).message
      console.error('Failed to fetch songs:', err)
    }
  })

  const getImageUrl = (imagePath: string): string => {
    return `${backUrl}/media/cover/${imagePath}`
  }
</script>

<template>
  <div>
    <h1>Главная страница</h1>
    <p>Добро пожаловать!</p>

    <div v-if="songs">
      <div v-for="song in songs" :key="song.uuid" class="song-item">
        <n-card :title="song.artist">
          <template #cover>
          <img alt="" :src="getImageUrl(song.uuid)" />
          {{song.name}}
          </template>
        </n-card>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<style scoped>
  .n-card {
    max-width: 300px;
  }
</style>

