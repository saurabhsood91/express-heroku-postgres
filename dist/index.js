"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _db = _interopRequireDefault(require("./db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  res.json({
    message: 'Hello, World!!!'
  });
});
app.get('/users', function (req, res) {
  var client = (0, _db["default"])();
  client.connect();
  client.query('select * from users', function (err, result) {
    console.log('err', err);
    console.log('result', result);
    return res.status(200).json(result.rows);
  });
});
app.listen(8080, function () {
  console.log("Server is running");
});