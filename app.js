const express = require('express')
const app = express()
const ip = '0.0.0.0'
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, ip, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})