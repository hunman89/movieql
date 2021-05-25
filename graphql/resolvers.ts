const hunman = {
  name: "hunman",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => hunman,
  },
};

export default resolvers;
