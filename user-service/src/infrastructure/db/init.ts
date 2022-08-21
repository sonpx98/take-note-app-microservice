import { UserAccount } from '@base/user-service/model';

const dbInit = async () => {
  UserAccount.sync({ alter: process.env.NODE_ENV === 'development' })
    .then(() => console.log('user account were synchronized successfully.'))
    .catch((error) => console.error(error));
};

export default dbInit;
