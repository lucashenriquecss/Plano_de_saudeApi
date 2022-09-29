'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Precos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Precos.hasMany(models.Planos,{foreignKey: 'codigo_id'});
    }
  }
  Precos.init({
    codigo: DataTypes.INTEGER,
    minimo_vidas: DataTypes.INTEGER,
    faixa1: DataTypes.DOUBLE,
    faixa2: DataTypes.DOUBLE,
    faixa3: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Precos',
  });
  return Precos;
};