#!/usr/bin/node
// Searches the second biggest integer in the list of arguments
// Assume all arguments can be converted to integer
// if no argument passed print 0 if 1 print 0

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const list = process.argv.sort();
  console.log(list.reverse()[1]);
}
