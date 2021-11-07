'use strict';

const base64 = require('base-64'); // used to encode data to base 64 data
const bcrypt = require('bcrypt'); // used to hash data

console.log('\n------------------ Base64 -----------------\n');

let string = 'samah:hamed';

const encoded = base64.encode(string);// c2FtYWg6aGFtZWQ=
console.log('Encoded String: ', encoded);

const decoded = base64.decode(encoded);
console.log('Decoded String: ', decoded);

console.log('\n------------------ Hashing -----------------\n');



let password = decoded.split(":")[1]; // hamed
password = "Basic";//$2b$10$hmZUsZvYfs6cbk6AbmOUbev2QqJWmDWeBTyAj/um1JRdZDM704NMq
const complexity = 10; // the # of times we want to hash the password // basic
encrypt(password, complexity);

async function encrypt(password, complexity) {

  // use the bcrypt lib to generate the hashed password

  // just to show how we encrypt our password
  const hashed = await bcrypt.hash(password, complexity);
  console.log('hashed: ', hashed);
}