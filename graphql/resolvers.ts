import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_: any, { id }: any) => getById(id),
  },
  Mutation: {
    addMovie: (_: any, { name, score }: any) => addMovie(name, score),
  },
};

export default resolvers;
