"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Token extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Token.belongsTo(models.user);
        }
    }
    Token.init(
        {
            token: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Token is required",
                    },
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "User id is required",
                    },
                },
                unique: {
                    args: true,
                    msg: "Token unique to a user",
                },
            },
        },
        {
            sequelize,
            tableName: "tokens",
            modelName: "token",
        }
    );
    return Token;
};
