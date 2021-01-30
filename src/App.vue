<template>
  <div class="p-4 m-16 grid gap-2 items-center justify-center" v-if="loaded">
    <h1>{{ cage.name }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w400/${cage.profile_path}`"/>
    <p>{{ cage.biography }}</p>
  </div>
</template>

<script>
import { getNicCage, getNicCageMovieCredits } from './tmdb';

export default {
  data() {
    return {
      loaded: false,
      cage: {},
      movies: []
    }
  },
  async created() {
    const [cage, movies] = await Promise.all([
      getNicCage(),
      getNicCageMovieCredits()
    ])
    this.cage = cage;
    this.movies = movies?.cast;
    this.loaded = true;
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
