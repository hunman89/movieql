export const people = [
  {
    id: 1,
    name: "hunman",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "hudsdsnman",
    age: 24,
    gender: "female",
  },
  { id: 3, name: "hfsfsaunman", age: 34, gender: "male" },
  { id: 4, name: "hunmafsdsn", age: 42, gender: "male" },
  { id: 5, name: "hunmadsadn", age: 22, gender: "male" },
  { id: 6, name: "hunma231n", age: 10, gender: "fwmale" },
  { id: 7, name: "hunman123", age: 67, gender: "female" },
];

export const getById = (id: number) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
