const mongoose = require('mongoose')

const subtaskShema=mongoose.Schema({
    
       title : String,
       description : String,
       status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
       subtask : [{ type: ObjectId, ref: 'Subtask'}]
   }
   )

   const subtasksModel=mongoose.model('Task',subtaskShema)

   module.exports =subtasksModel