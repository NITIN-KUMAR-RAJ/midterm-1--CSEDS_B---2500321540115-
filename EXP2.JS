const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello, Node.js!');

const data = fs.readFileSync('demo.txt', 'utf8');
console.log("File Content:", data);

fs.appendFileSync('demo.txt', '\nWelcome to CRUD Operations!');

console.log("Updated Content:", fs.readFileSync('demo.txt', 'utf8'));

fs.unlinkSync('demo.txt');

console.log("File deleted successfully");