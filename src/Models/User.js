const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        require : [true,"First Name is require.."]
    },

    lastName : {
        type : String,
        require : [true,"Last Name is require.."]
    },

    email : {
        type : String,
        require : [true,"Email is require.."]
    },

    password : {
        type : String,
        require : [true,"Password is required.."]
    },

    age : {
        type : String,
        require : [true,"Enter your age.."]
    },

    gender : {
        type : String,
        require : [true,"Please provide your gender.."]
    },

});

const User = mongoose.model('Users',userSchema);
module.exports = User;