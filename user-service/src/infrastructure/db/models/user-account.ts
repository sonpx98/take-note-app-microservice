import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey } from 'sequelize';
import Role from '@base/user-service/model/role';
import sequelizeConnection from '@base/user-service/db/config';

class UserAccount extends Model<InferAttributes<UserAccount>, InferCreationAttributes<UserAccount>> {
  declare id: CreationOptional<number>;
  declare fullName: string;
  declare email: string;
  declare roleId: ForeignKey<Role['id']>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

UserAccount.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
  }
);

export default UserAccount;
