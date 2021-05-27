const express = require('express')
const PATH = require('path')
const app = express()
const port = 3000

app.use(express.static(PATH.join(__dirname, 'client', 'dist')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})