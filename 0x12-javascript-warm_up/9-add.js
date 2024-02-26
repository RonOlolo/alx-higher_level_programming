#!/usr/bin/node
// Prints the addition of 2 integers
// 1st argv is the 1st integer and the 2nd arg is the 2nd int

function add (a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(add(process.argv[2], process.argv[3]));
