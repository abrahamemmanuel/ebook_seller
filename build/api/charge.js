"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _charge = _interopRequireDefault(require("../controllers/charge_customers/charge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // @route   /charge
// @desc     Create and charge customers
// @access   Public
// @method   POST


router.post('/charge', _charge["default"].chargeCustomers);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=charge.js.map