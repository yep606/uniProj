const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const axios = require('axios');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.redirect("https://t.me/telfa_bot");
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
})

app.post('/auth', async (req, res) => {
  console.log(`----username -> ${req.body}`);
  let username = req.body.username;
  let password = req.body.password;
  if (username && password) {
    let res = await axios.post('http://localhost:8090/authenticate', {username, password})
    console.log(res);
  }
}
)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



