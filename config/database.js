const mongoose = require("mongoose");




const dbConnect = () => {

	// this connect method is used to establish connection
	mongoose.connect("mongodb://localhost:27017/ABHISHEKH")
		.then((data) => {
			console.log("Database is connected", data.connection.host)
		})
		.catch((error) => {
			console.log(error)
			console.log("DB connection refusedx")
		})

}


module.exports = dbConnect