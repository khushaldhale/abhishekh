const userSchema = require("../models/user");  // userschema is fetched



exports.createUser = async (req, res) => {
	console.log(req.body)
	const fname = req.body.fname;
	const lname = req.body.lname;
	const age = req.body.age;
	const gender = req.body.gender;
	const email = req.body.email


	const response = await userSchema.create({ fname, lname, age, gender, email: email });

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

exports.getViaGender = async (req, res) => {

	const gender = req.body.gender;

	console.log(gender)

	// gender , gender:gender also acceptabl
	const response = await userSchema.find({ gender });


	return res.status(200)
		.json({
			success: true,
			message: "All users are fetched",
			data: response
		})


}



exports.updateGender = async (req, res) => {
	const email = req.body.email;  // who we have to update gender 
	const fname = req.body.fname;
	const lname = req.body.lname;
	const age = req.body.age;
	const gender = req.body.gender;



	// findig doc,  updation value  , updated document 
	const response = await userSchema.findOneAndUpdate({ email }, { gender, email, fname, lname, age }, { new: true });


	res.status(200)
		.json({
			success: true,
			message: "user is updated succefsully",
			data: response
		})




}


exports.updateUser = async (req, res) => {
	const email = req.body.email;  // who we have to update gender 
	const gender = req.body.gender;


	// findig doc,  updation value  , updated document 
	const response = await userSchema.findOneAndUpdate({ email }, { gender }, { new: true });


	res.status(200)
		.json({
			success: true,
			message: "user is updated succefsully",
			data: response
		})




}



//  deleting via emai 
exports.deleteUser = async (req, res) => {
	const email = req.body.email;

	const response = await userSchema.findOneAndDelete({ email });


	res.status(200)
		.json({
			success: true,
			message: "user is deleted succefully",
			data: response
		})

}

// deleting via id
exports.deleteUserViaID = async (req, res) => {
	const _id = req.body._id;

	const response = await userSchema.findByIdAndDelete({ _id });


	res.status(200)
		.json({
			success: true,
			message: "user is deleted succefully",
			data: response
		})

}