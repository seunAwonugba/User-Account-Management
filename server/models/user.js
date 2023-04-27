'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    photo: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.STRING,
    dob: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    nationality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};