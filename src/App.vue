<template>
  <div v-if="loaded">
    <h1>{{ cage.name }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w500/${cage.profile_path}`"/>
    <br>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
