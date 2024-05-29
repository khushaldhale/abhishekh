const express = require("express");  // first import the express 
const { createUser, getAllUsers, getViaGender, updateGender, deleteUser, deleteUserViaID } = require("../controllers/user");


const router = express.Router() // giveing router instance 


router.post("/users/new", createUser);
router.get("/users", getAllUsers);
router.get("/gender", getViaGender)
router.put("/update-gender", updateGender);
router.delete("/delete-user", deleteUser)
router.delete("/delete-user-id", deleteUserViaID)


module.exports = router;

