/**
1.Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
 */

interface Person {
  name: string;
  age: number;
  gender: "male" | "female";
}

const people: Person[] = [
  { name: "Sumaiya", age: 25, gender: "female" },
  { name: "Hasan", age: 20, gender: "male" },
  { name: "Sajib", age: 22, gender: "male" },
  { name: "Zarmina", age: 30, gender: "female" },
  { name: "Jamil", age: 28, gender: "male" },
];

function getMaleNames(persons: Person[]): string[] {
  return persons
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

const maleNames = getMaleNames(people);
console.log(maleNames);
