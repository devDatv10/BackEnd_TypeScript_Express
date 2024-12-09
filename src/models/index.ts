import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { Dialect } from 'sequelize';
const config = require('../config/config');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db: any = {};

const sequelizeConfig = config[env];
const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
  }
);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts'
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
