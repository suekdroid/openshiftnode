require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Application listening at ${process.env.PORT}`)
  console.log(`${process.env.MY_ENV_VAR}`);
})