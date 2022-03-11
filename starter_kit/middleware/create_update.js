const { body, validationResult } = require("express-validator");

const createfood = () => {
  return [
    body("name")
        .notEmpty()
        .withMessage("Category name"),
    body("price")
        .notEmpty()
        .isNumeric().isLength({min:1, max:10}) 
        .withMessage("Price is intager")       
  ];
};


exports.createfood = createfood;
