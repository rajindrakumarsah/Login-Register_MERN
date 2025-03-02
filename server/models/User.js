const mongoose = require('mongoose')

//this is the schema for the database 
const UserSchema = new mongoose.Schema({
    //assigning which is required in table
    name: String,
    email: String,
    password: String,
    //this is the role of hte user
    role: {
        type: String,
        default: "visitor"
    }
})

//afeter createing the schema , we need to pass into the model
const UserModel = mongoose.model("users", UserSchema)
//exporting the model , which is created 
module.exports = UserModel