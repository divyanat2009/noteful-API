const knex = require('knex');
const app = require('./app');
const { PORT, DATABASE_URL } = require('./config');


const db  = knex({
  client: 'pg',
  connection: 'postgres://ywzfulztpkakhk:b1bf24603849950e5ead934083fee44b3af34ed6eb9ed058b50ae17bab9bcc79@ec2-50-19-26-235.compute-1.amazonaws.com:5432/dcprlf6nbc330i?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',  
});

app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

