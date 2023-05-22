import 'dotenv/config';

const config = {
  PORT: process.env.PORT || 9000,
  DATABASE_URL: process.env.DATABASE_URL,
};

export default config;
