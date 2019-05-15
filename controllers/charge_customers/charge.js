const keys = require('../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

class ChargeController {
  chargeCustomers(req, res) {
    const amount = 2500;

    stripe.customers.create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
    })
      .then(customer => stripe.charges.create({
        amount,
        description: 'Web Development Ebook',
        currency: 'usd',
        customer: customer.id,
      }))
      .then(charge => res.render('success'));
  }

}

const ChargesController = new ChargeController();

export default ChargesController;
