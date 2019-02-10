import express from 'express'

/* eslint-disable no-console */

const port = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('Server listening: http://localhost:%s', port)
  }
})
