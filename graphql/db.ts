export let movies = [
  {
    id: 0,
    name: "hunman",
    score: 18,
  },
  {
    id: 1,
    name: "hunman1",
    score: 58,
  },
  {
    id: 2,
    name: "hunman2",
    score: 88,
  },
  {
    id: 3,
    name: "hunman3",
    score: 98,
  },
];

export const getMovies = () => movies;

export const getById = (id: number) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovies = (id: number) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name: string, score: number) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
