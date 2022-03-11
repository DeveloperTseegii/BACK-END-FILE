const express = require("express");
const router = express.Router();
const Food = require('../models/Food')
const Category = require('../models/Category')
const FoodController = require("../controller/FoodController")
const validation = require("../middleware/create_update")

// Api
router.use("/food", FoodController.getFoods);
router.post("/addFood", validation.createfood(), FoodController.addFood);
router.get("/destroyFood/:id", FoodController.deleteFood);
router.put("/update/:id", FoodController.updateFood);
router.get("/findOne/:id", FoodController.findOneFood);

router.use("/category", FoodController.getCategory)
router.use("/find/:id", FoodController.categoryFind)
router.use("/foodee", FoodController.foods)


module.exports = router;