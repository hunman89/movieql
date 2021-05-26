import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }: any) => getMovies(limit, rating),
  },
};

export default resolvers;
