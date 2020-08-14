const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const { session } = require('telegraf');



app.get('/', (req, res) => {
  res.redirect("https://t.me/telfa_bot");
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



