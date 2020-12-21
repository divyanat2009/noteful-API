module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql://postgres:bragada013078@localhost:5433/noteful',
  DB_PORT: process.env.DB_PORT || 5433,
};