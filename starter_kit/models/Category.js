const { Sequelize, DataTypes } = require('@sequelize/core');
const sequelize = require('../database.js');


const Category = sequelize.define('food_category', {
  // columns
  name: {type:DataTypes.STRING, allowNull: false}, 
  type: {type:DataTypes.STRING}, 
  color: {type:DataTypes.STRING}, 
}, {
  timestamps: false,
  freezeTableName: true

  
  // Other model options go here
});
async () => {
  await Category.sync({alter: true})
}
module.exports = Category;