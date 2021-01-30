const KEY = process.env.TMDB_API_KEY || import.meta.env.VITE_TMDB_API_KEY;

export async function getNicCage() {
  const resp = await fetch(`https://api.themoviedb.org/3/person/2963?api_key=${KEY}&language=en-US`)
  const data = await resp.json();
  return data;
}

export async function getNicCageMovieCredits() {
  const resp = await fetch(`https://api.themoviedb.org/3/person/2963/movie_credits?api_key=${KEY}&language=en-US`);
  const data = await resp.json();
  return data;
}
