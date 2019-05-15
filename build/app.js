"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _charge = _interopRequireDefault(require("./api/charge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var keys = require('./config/keys');

var stripe = require('stripe')(keys.stripeSecretKey); // create server


var app = (0, _express["default"])(); // handlebars middleware

app.engine('handlebars', (0, _expressHandlebars["default"])({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars'); // body parser middleware

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // set static folder

app.use(_express["default"]["static"](_path["default"].join(__dirname, './public/'))); // set index route
// @route   /
// @desc     Get Home page
// @access   Public
// @method   GET

app.get('/', function (req, res) {
  res.render('index', {
    stripePublishableKey: keys.stripePublishableKey
  });
}); // set server to use router

app.use(_charge["default"]); // declare port variable

var port = process.env.PORT || 8080; // set server to listen on corresponding port

app.listen(port, function () {
  console.log("Server started on port ".concat(port));
}); // eslint-disable-line no-console
//# sourceMappingURL=app.js.map