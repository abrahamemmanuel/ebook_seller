"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var keys = require('../../config/keys');

var stripe = require('stripe')(keys.stripeSecretKey);

var ChargeController =
/*#__PURE__*/
function () {
  function ChargeController() {
    _classCallCheck(this, ChargeController);
  }

  _createClass(ChargeController, [{
    key: "chargeCustomers",
    value: function chargeCustomers(req, res) {
      var amount = 2500;
      stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
      }).then(function (customer) {
        return stripe.charges.create({
          amount: amount,
          description: 'Web Development Ebook',
          currency: 'usd',
          customer: customer.id
        });
      }).then(function (charge) {
        return res.render('success');
      });
    }
  }]);

  return ChargeController;
}();

var ChargesController = new ChargeController();
var _default = ChargesController;
exports["default"] = _default;
//# sourceMappingURL=charge.js.map