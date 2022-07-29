require('dotenv').config()
const express = require('express')
const app = express()
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
app.use(express.static('dist'))

// health check for deployment
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('2.1.3') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  /* eslint-disable */ console.log('server started on port 5000')
})
