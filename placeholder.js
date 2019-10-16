const rp = require("request-promise"); 

rp('https://jsonplaceholder.typicode.com/users/1').then 
((body) => {
const parsed_data = JSON.parse(body); 
 console.log(`${parsed_data.name} lives in ${parsed_data.address.city}`); 
}).catch((err) => { 
  console.log("Error!", err);
  })