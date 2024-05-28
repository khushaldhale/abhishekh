const userSchema = require("../models/user");  // userschema is fetched



exports.createUser = async (req, res) => {
	console.log(req.body)
	const fname = req.body.fname;
	const lname = req.body.lname;
	const age = req.body.age;


	const response = await userSchema.create({ fname, lname, age });

	return res.status(200)
		.json({
			success: true,
			message: "Ur data submiited",
			data: response
		})

}


exports.getAllUsers = async (req, res) => {

	const response = await userSchema.find();


	return res.status(200)
		.json({
			success: true,
			message: "All users are fetched",
			data: response
		})


}

exports.deletUser = async (req, res) => {

}