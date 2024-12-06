import { Dialect } from 'sequelize';

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

const config: { [key: string]: DBConfig } = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'dev_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: (process.env.DB_DIALECT as Dialect) || 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: 'test_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: (process.env.DB_DIALECT as Dialect) || 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: 'prod_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: (process.env.DB_DIALECT as Dialect) || 'postgres',
  },
};

export default config;
