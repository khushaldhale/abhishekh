// we got  an access to our express dependecncy


const express = require("express");   // we are importing the function which is sent from express ,  indirectly importing express

const app = express();  // we are calling to the function and that function is returning web application 



app.use(express.json())  // it is middleware that is used to proces sthe data coming from frontend 

app.get("/", (req, res) => {


	res.status(200)
		.json({
			success: true,
			message: "server is up and running hey this is abhishekh"
		})
})



// url and callbac function ,  inside callback function we do write logic , we can access req and res  object there 
app.get("/greet", (req, res) => {


	res.status(200)
		.json({
			success: true,
			message: "Hello what is up "
		})
})



// API for users/new


// const userSchema = require("./models/user");
// app.post("/users/new", async (req, res) => {
// 	console.log(req.body)
// 	const fname = req.body.fname;
// 	const lname = req.body.lname;
// 	const age = req.body.age;


// 	const response = await userSchema.create({ fname, lname, age });

// 	return res.status(200)
// 		.json({
// 			success: true,
// 			message: "Ur data submiited",
// 		})

// })

// importing the routes 

const userRoutes = require("./routes/userRoutes");

app.use("/api/v1", userRoutes)





const dbConnect = require("./config/database");
dbConnect()



// we are teling that server should be executed or run on the given PORT number 
app.listen(3000, () => {
	console.log("server is listening at PORT")
})


// setps:
//  1. create the controller folder
//  2. create the file in it
// 3.  create the file in the folder
// 4. import the schema
//5. write the controller tere
// create the function and write database inetarction logic in it and export that function using
// exports keyword
//6. now routes are remained



// create separate folder for routes
//  create file in it
//  define routes there
// export the routes , import it in index.js
//  and ur work is ddon