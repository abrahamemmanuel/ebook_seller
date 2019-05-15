import express from 'express';
import ChargesController from '../controllers/charge_customers/charge';

const router = express.Router();

router.post('/charge', ChargesController.chargeCustomers);

export default router;
