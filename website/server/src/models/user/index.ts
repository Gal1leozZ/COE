import {DataTypes, Model} from "sequelize";
import db from "../../config/database.config"

interface User{
    id: string;
    firstname: string;
    lastname: string;
}

export class Users extends Model<User> {}

//Create Table
Users.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        firstname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        tableName: "users",
    }
);