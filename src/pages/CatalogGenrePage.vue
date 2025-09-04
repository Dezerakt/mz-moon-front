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
    <div style="padding-top: 50px;" v-if="genres">
      <n-grid cols="1 s:3 m:4 l:5 xl:5 2xl:7" responsive="screen">
        <n-grid-item class="main-page-panel" v-for="genre in genres">
          <router-link class="genre-link" :to="`/genre/${genre.name}`">
            <div class="cover-container">
              <img class="cover" :src="getImageUrl(genre.uuid)" :alt="genre.name">
            </div>
            <h1>{{genre.name}}</h1>
          </router-link>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

