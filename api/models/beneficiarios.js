'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beneficiarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Beneficiarios.init({
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    idade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Beneficiarios',
  });
  return Beneficiarios;
};