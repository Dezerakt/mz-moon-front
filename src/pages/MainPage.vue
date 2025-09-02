<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import type { Song, SongResponse } from '@/types/Song'
  import {Genre, GenreResponse} from "@/types/Genre";

  // reactive variable to hold data
  const backUrl = import.meta.env.VITE_API_URL
  const songs = ref<Song[] | null>(null)
  const genres = ref<Genre[] | null>(null)
  const error = ref<string | null>(null)

  onMounted(async () => {
    // get songs
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

    // get genres
    try {
      const res = await fetch(`${backUrl}/catalog/genre`)

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data: GenreResponse = await res.json()
      genres.value = data.data

    } catch (err) {
      error.value = (err as Error).message
      console.error('Failed to fetch songs:', err)
    }
  })

  const getImageUrl = (coverUUID: string): string => {
    return `${backUrl}/media/cover/${coverUUID}`
  }
</script>

<template>
  <div>
    <n-carousel autoplay>
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
      <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>
    <br>

    <div v-if="songs">
      Songs
      <n-grid x-gap="12" :y-gap="8" :cols="4"ј>
        <n-gi v-for="song in songs">
          <div class="main-page-panel">
            <img class="cover" :src="getImageUrl(song.uuid)" alt="">
          </div>
        </n-gi>
      </n-grid>
    </div>

    <div v-if="genres">
      Genres
      <n-grid x-gap="12" :y-gap="8" :cols="4">
        <n-gi v-for="genre in genres">
          <div class="main-page-panel">
            <img class="cover" :src="getImageUrl(genre.uuid)" alt="">
          </div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

