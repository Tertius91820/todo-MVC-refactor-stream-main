//Handles initial GET request for the homepage
//Handles POST method  request for adding a new task

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);          //Read
router.post("/new", homeController.createTicket);  //Create

module.exports = router;
