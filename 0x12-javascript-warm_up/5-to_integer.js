#!/usr/bin/node
// Prints My number: <first argument converted in interger> if the
// first argument can be converted into an integer

if (isNaN(process.argv[2])) {
  console.log('Not a number');
} else {
  console.log('my number: ' + parseInt(process.argv[2]));
}
