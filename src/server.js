const knex = require('knex')
const App = require('./App')
const { PORT, DATABASE_URL } = require('./config')
require('dotenv').config()

const db = knex({
  client: 'pg',
  connection: DATABASE_URL
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})