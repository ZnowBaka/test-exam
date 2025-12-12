import express from 'express'
import { validateBudget } from "../middlewares/validateBudget.js";
import * as budgetController from '../controllers/BudgetController.js';

const router = express.Router()
const step = (label) => (req, res, next) => { console.log('-> router:', label); next(); };

router.use(step('budget router'))
//routes--
router.get('/budget', step('GET/budget'), budgetController.getBudgets)
router.post('/budget', step('POST/budget'), validateBudget, budgetController.create)

export default router