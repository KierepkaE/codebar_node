const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});
app.post('/tasks', function (req, res) {
  console.log(req.body);
  fs.writeFileSync("b.json", req.params);
  res.send('add a NEW TASK');
})


app.listen(process.env.PORT || 3000);