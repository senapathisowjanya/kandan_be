const mongoose = require('mongoose')

const taskShema=mongoose.Schema({
    
       title : String,
       description : String,
       status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
       subtask : [{ type: ObjectId, ref: 'Subtask'}]
   }
   )

   const tasksModel=mongoose.model('Task',taskShema)

   module.exports =tasksModel