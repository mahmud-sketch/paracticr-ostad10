exports.HelloGet = (req, res) => {
  console.log("hello-get");
  res
    .status(200)
    .json({ status: "success", data: "hello get express rest api" });
};

exports.HelloPost = (req, res) => {
  res
    .status(201)
    .json({ status: "success", data: "hello post express rest api" });
};
