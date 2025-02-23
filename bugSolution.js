const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = {
    message: 'Hello World!',
    data: [1, 2, 3] // Example data
  };

  // Validate data before sending.  Use a JSON validator here if data is dynamic
  //Example:  const isValid = JSON.stringify(data);
  //           if(!isValid) { handle error }
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});