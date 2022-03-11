const dotenv = require('dotenv').config();
const express = require("express");
const connection = require("./database")
const app = express();
const port = 3000;
const apiRoutes = require('./routes/api');

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes)

app.all("*", (req, res)=>{
   res.status(404).json({success: false, err:"not found"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
