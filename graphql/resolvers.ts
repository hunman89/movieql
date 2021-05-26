import { getMovies, getById, addMovie, deleteMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_: any, { id }: any) => getById(id),
  },
  Mutation: {
    addMovie: (_: any, { name, score }: any) => addMovie(name, score),
    deleteMovies: (_: any, { id }: any) => deleteMovies(id),
  },
};

export default resolvers;
