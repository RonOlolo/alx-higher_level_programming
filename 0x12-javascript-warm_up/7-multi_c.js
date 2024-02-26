#!/usr/bin/node
// Prints x times "C is fun"
// Where x is the first argument of the script
// if the first argument can't be converted to an integer
// Print "Missing number of occurrences"

const lang = 'C is fun';

if (isNaN(process.argv[2])) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < parseInt(process.argv[2]); i++) {
    console.log(lang);
  }
}
