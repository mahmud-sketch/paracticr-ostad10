const studentsModel = require("../models/StudentsModel");

exports.InsertStudent = (req, res) => {
  let reqBody = req.body;
  console.log(reqBody);
  studentsModel
    .create(reqBody)
    .then((data) => {
      res.status(201).json({ status: "success", data: data });
    })
    .catch((err) => res.status(401).json({ status: "fail", data: err }));
};

exports.ReadStudent = (req, res) => {
  let query = {};
  let projection = "Name Roll Class Remarks";
  console.log(req);
  studentsModel
    .find(query, projection)
    .then((data) => {
      res.status(201).json({ status: "success", data: data });
    })
    .catch((err) => res.status(401).json({ status: "fjhjkh", data: err }));
};
