const mongoose = require("mongoose")


//we are just creating schema in this line , variable is created to stiotre that 
const userSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	age: Number,
	gender: String,
	email: String
})


// actual models is created using  model method
module.exports = mongoose.model("USER", userSchema)