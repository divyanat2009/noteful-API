require('dotenv').config();

module.exports = {
    "migrationsDirectory": "migrations",
    "driver": "pg",
    "connectionString": process.env.PRODUCTION_DATABASE_URL,
    "ssl": !!process.env.SSL,
}