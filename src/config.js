module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/noteful1',
  DB_PORT: process.env.DB_PORT || 5433,
  PASSWORD: process.env.PASSWORD || 'bragada013078',
  DATABASE: process.env.DATABASE || 'noteful1',
  HOST: process.env.HOST || 'localhost',
  USER: process.env.USER || 'postgres',
  
};