const express = require('express');
const conectDB = require('./config/database');
const User = require('./Models/User');
const app = express();

app.post('/signup',async (req,res)=>{

    const user = new User({
        firstName : "Badal",
        lastName : "Kumar",
        email : "badal@gmail.com",
        password : "12345665",
        gender : "male"
    });
    await user.save();
    res.send("User added Successfully :)");
})


conectDB().then(() => {
    console.log("Database Connected Successfully :)");
    app.listen(4000, () => {
        console.log("Server is running on PORT 4000")
    });
}).catch((err) => {
    console.log("An error Occur while connecting the Database :(  ", err);
})