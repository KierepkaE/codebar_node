const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

let dataJSON = '';
app.post('/tasks', function (req, res) {
  const data = fs.readFileSync('db.json', 'utf8');
  let tasks = JSON.parse(data);
  tasks = tasks.map((myTask, index) => ({
    id: index + 1,
    task: myTask
  }));
  const id = tasks.length + 1;
  const newTask = req.body.task;
  tasks.push({ id: id, task: newTask });
  console.log(tasks)
  dataJSON = JSON.stringify(tasks);
  fs.writeFileSync("datadb.json", dataJSON);
  res.redirect('/list');
})

app.get('/list', (request, response) => {
  response.sendFile(__dirname + '/db.json');
});

app.listen(process.env.PORT || 3000);