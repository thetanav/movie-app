export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  header: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `/search/movie/?query=${encodeURIComponent(query)}`
    : `/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(TMDB_CONFIG.BASE_URL + endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.header,
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data.results;
};
