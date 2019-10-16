const request = require("request"); 

request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
  //eval(require('locus'))
  if(!error && response.statusCode == 200){ 
      const parsed_data = JSON.parse(body); 
      // the dollar sign and brackets are a part of template literal syntax 
      // it allows dynamic the string we created inside the parentheses to 
      console.log(`${parsed_data.name} lives in ${parsed_data.address.city}`); 
  }
});