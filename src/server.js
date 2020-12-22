const knex = require('knex')
const App = require('./App')
const { PORT, DB_URL } = require('./config')
require('dotenv').config()

const db = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})