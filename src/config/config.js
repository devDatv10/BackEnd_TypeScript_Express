const path = require('path');

module.exports = {
  development: {
    username: 'postgres',
    password: '0603197601042010',
    database: 'BackEnd_TypeScript_Express_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'postgres',
    password: 'your_test_password',
    database: 'your_test_database',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'postgres',
    password: 'your_prod_password',
    database: 'your_prod_database',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
