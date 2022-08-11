import { UserAccount, Role } from '@base/user-service/model';
import sequelizeConnection from '@base/user-service/db/config';

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  sequelizeConnection.sync({ alter: isDev });
};

export default dbInit;
