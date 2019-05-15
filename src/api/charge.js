import express from 'express';
import ChargesController from '../controllers/charge_customers/charge';

const router = express.Router();

// @route   /charge
// @desc     Create and charge customers
// @access   Public
// @method   POST
router.post('/charge', ChargesController.chargeCustomers);

export default router;
