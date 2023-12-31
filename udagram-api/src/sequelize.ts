import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
   username: config.username,
   password: config.password,
   database: config.database,
   host: config.host,
   port: 5432,
   dialect: config.dialect,
   storage: ":memory:",
   ssl: true,
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false,
      },
   },
   pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});