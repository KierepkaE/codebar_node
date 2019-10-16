const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});
app.post('/tasks', function (req, res) {
  const task = req.body.task;
  fs.appendFileSync("db.json", task + "," + '\n');
  res.redirect('/list');
})

app.get('/list', (request, response) => {
  response.sendFile(__dirname + '/db.json');
});

app.listen(process.env.PORT || 3000);