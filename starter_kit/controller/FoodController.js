const express = require("express");
const Food = require("../models/Food");
const Category = require("../models/Category");
const {Op}= require("sequelize")

const getFoods = (req, res, next) => {
  Food.findAll()
  .then((data)=> res.json({data: data}))
  .catch((err)=>res.json({data: err}));
};
const foods = (req, res, next) => {
  Food.findAll({
    where:{
        [Op.and] : [
          {portion: 1},
         { price: {[Op.lt]:10000}}
          ]
    }
  })
  .then((data)=> res.json({data: data}))
  .catch((err)=>res.json({data: err}));
};
const addFood = (req, res, next) => {
  Food.create(req.body)
  .then((result) => res.json({success: true, data: result}))
  .catch(function(err){
    res.status(400).json({success: false, err: err.name})
   });
};
const deleteFood  = (req, res, next) =>{
  Food.destroy({where: {id:req.params.id}})
  .then((result)=> res.json({success:true, data: result}))
  .catch(function(err){
      res.status(400).json({success: false, err: err.name});
  });
};
const updateFood = (req, res, next) =>{
  Food.update(req.body, {where: {id:req.params.id}} )
  .then((result) => res.json({success: true, data: result}))
  .catch(function(err){
      res.status(400).json({success: false, err: err.name})
  });
};
const findOneFood = (req, res, next) => {
  Food.findOne({where: {id:req.params.id}} )
  .then((result) => res.json({success: true, data: result}))
  .catch(function(err){
      res.status(400).json({success: false, err: err.name})
  });
}; 
const getCategory = (req, res, next) => {
  Category.findAll()
  .then((data)=> res.json({data: data}))
  .catch((err)=>res.json({data: err}));
};
const categoryFind = (req, res, next) => {
  Category.findOne({where:{id:req.params.id}})
  .then((result)=> res.json({success: true, data:result}))
  .catch(function(err){
    res.status(400).json({success: false, err: err.name})
  });
};
module.exports = {
  getFoods,
  addFood,
  deleteFood,
  updateFood,
  findOneFood,
  getCategory,
  categoryFind,
  foods
};
