'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pub.belongsToMany(models.user,{
        through: "user_pubs"
      })
      models.pub.hasMany(models.user_notes)
    }
  }
  pub.init({
    obdbId: DataTypes.STRING,
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    city:DataTypes.STRING,
    phone: DataTypes.STRING,
    website_url: DataTypes.STRING,
  }, 
  {
    sequelize,
    modelName: 'pub',
  });
  return pub;
};