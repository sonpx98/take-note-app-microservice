import { Dialect, Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize(
  `${process.env.DB_DRIVER}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

export default sequelizeConnection;
