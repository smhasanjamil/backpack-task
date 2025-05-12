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
  { name: "Reajul", age: 25, gender: "male" },
  { name: "Sumaiya", age: 25, gender: "female" },
  { name: "Hasan", age: 20, gender: "male" },
  { name: "Sajib", age: 22, gender: "male" },
  { name: "Zarmina", age: 30, gender: "female" },
  { name: "Jamil", age: 28, gender: "male" },
];

const getMaleNames = (persons: Person[]): string[] =>
  persons
    .filter((person) => person.gender === "male")
    .map((person) => person.name);

const maleNames = getMaleNames(people);
console.log(maleNames);

/**
2.Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

 */

interface Book {
  title: string;
  author: string;
  year: number;
}

const library: Book[] = [
  { title: "Padma Nodir Majhi", author: "Manik Bandopadhyay", year: 1936 },
  { title: "Lalsalu", author: "Syed Waliullah", year: 1948 },
  { title: "Srikanta", author: "Sarat Chandra Chattopadhyay", year: 1917 },
  { title: "Chokher Bali", author: "Rabindranath Tagore", year: 1903 },
  { title: "Debdas", author: "Sarat Chandra Chattopadhyay", year: 1917 },
];

const extractTitles = (books: Book[]): string[] =>
  books.map((book) => book.title);

const bookTitles = extractTitles(library);
console.log(bookTitles);

/**
4.Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
 */

interface Car {
  make: string;
  model: string;
  year: number;
}

const carList: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2018 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Ford", model: "F-150", year: 2015 },
];

const sortCarsByYear = (cars: Car[]): Car[] =>
  [...cars].sort((a, b) => a.year - b.year);

const sortedCars = sortCarsByYear(carList);
console.log(sortedCars);

/**
6. Task: Leap Year Checker
Write a function that determines whether a given year is a leap year.
Example: Happy New Year
 */

const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const year = 2025;

console.log(
  isLeapYear(year) ? `${year} is a leap year!` : `${year} is not a leap year.`
);

/**
08. Task: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.
 */

const findMaxNumber = (numbers: number[]): number => Math.max(...numbers);

const numberArray = [7, 5, 9, 11, 6];
console.log(findMaxNumber(numberArray));
