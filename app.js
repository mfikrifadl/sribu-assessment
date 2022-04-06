const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const service = require('./service')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/links', service.getCount)

app.listen(port, () => {
  console.log(`Sribu app listening on port ${port}`);
});
