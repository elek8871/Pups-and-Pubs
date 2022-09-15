'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user_notes.belongsTo(models.user)
      models.user_notes.belongsTo(models.pub)
    }
  }
  user_notes.init({
    userId: DataTypes.INTEGER,
    pubId: DataTypes.INTEGER,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_notes',
  });
  return user_notes;
};