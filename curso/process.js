'use strict'

process.argv[2]='ratakas'
// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});