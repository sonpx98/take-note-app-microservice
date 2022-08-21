import { userAccountI } from '@base/db/models/user-account';
import { UserAccount } from '@base/user-service/model';

export const getAllUsersRepo = async (offset = 0, limit = 20) => {
  try {
    const users = await UserAccount.findAll({ offset, limit });

    return users;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const createUserRepo = async ({ data }: { data: userAccountI }) => {
  const dataValue = {
    fullName: data.fullName,
    email: data.email,
    createdAt: new Date(),
    updateAt: new Date(),
  };

  try {
    await UserAccount.create(dataValue);
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const updateUserRepo = async ({ data }: { data: userAccountI }) => {
  const id = data.id;

  const dataValue = {
    fullName: data.fullName,
    email: data.email,
    createdAt: new Date(),
    updateAt: new Date(),
  };

  try {
    await UserAccount.update(dataValue, {
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const deleteUserRepo = async (id: number) => {
  try {
    await UserAccount.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);

    return [];
  }
};
