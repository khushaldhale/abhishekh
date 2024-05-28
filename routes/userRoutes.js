const express = require("express");  // first import the express 
const { createUser, getAllUsers } = require("../controllers/user");


const router = express.Router() // giveing router instance 


router.post("/users/new", createUser);
router.get("/users", getAllUsers);

module.exports = router;

