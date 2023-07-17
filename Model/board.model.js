const mongoose = require('mongoose')

const boardShema=mongoose.Schema({
    
     name: String,
     tasks: [{ type: ObjectId, ref: 'Task'}]
   }
)

const boardModel=mongoose.model('Task',boardShema)

module.exports =boardModel