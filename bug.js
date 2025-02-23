const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Error: Unexpected token error in JSON response
//This is typically not a direct Express error, but rather an error in how you handle JSON responses.
//The error usually appears when you try to send an invalid JSON object or when the server tries to send a non-JSON response with the 'application/json' content-type header.