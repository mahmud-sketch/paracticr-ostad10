const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/HelloController");
const Studentscontroller = require("../controllers/Studentscontroller");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

// console.log("api");

router.get("/hello-get", HelloController.HelloGet);
router.post("/hello-post", HelloController.HelloPost);

router.post("/read-student", jsonParser, Studentscontroller.ReadStudent);
router.get("/insert-student", jsonParser, Studentscontroller.InsertStudent);

module.exports = router;
