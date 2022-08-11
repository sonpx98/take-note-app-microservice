import { Dialect, Sequelize } from 'sequelize'

const sequelizeConnection = new Sequelize(`${process.env.DB_DRIVER}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`);

export default sequelizeConnection