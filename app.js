const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello Codebar');
})


app.listen(process.env.PORT || 3000);