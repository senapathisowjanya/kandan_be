const mongoose = require('mongoose')
require("dotenv").config()
const conne=mongoose.connect(process.env.mongoUrl)

module.exports=conne