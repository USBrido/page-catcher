const request = require('request');
const fs = require('fs');

const args = process.argv;
console.log(args)
request(args[2], (error, response, body) => {
  fs.appendFile(args[3], body, error => {
    if (error) throw error
  })
});



