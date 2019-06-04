'use strict'

const Express = require('express')
const App = Express()

App.get('/', (req, res) => {
  res.send('The server works!')
})

App.listen(3000, () => console.log('The App is listening on port: ', 3000))
