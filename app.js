const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))



app.listen(3000, () => {
  console.log('Application running on localhost:3000')
})