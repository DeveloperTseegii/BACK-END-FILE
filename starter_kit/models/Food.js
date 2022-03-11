const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');

const Food = sequelize.define('food', {
  // columns
  name: {type:DataTypes.STRING, allowNull: false}, 
  price: {type:DataTypes.INTEGER, allowNull: false}, 
  portion: {type:DataTypes.STRING, allowNull: false},
  discount: {type:DataTypes.INTEGER, allowNull: false},
  category_id: {type:DataTypes.INTEGER, allowNull: false}, 
  stock: {type:DataTypes.INTEGER, allowNull: false}, 
}, {
  timestamps: false
  // Other model options go here
});
async () => {
  await Food.sync({alter: true})
}
module.exports = Food;