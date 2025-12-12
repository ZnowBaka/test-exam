import express from 'express';
import { validateTransaction} from "../middlewares/validateTransaction.js";
import * as transactionController from "../controllers/transactionController.js";

const router = express.Router({mergeParams: true});
const step = (label) => (req, res, next) => { console.log('-> router:', label); next(); };

router.use(step('transaction router'))

// routes--
router.get('/transactions', step('GET/transactions'), transactionController.getTransactions);
router.post('/transactions', step('POST/transaction'), validateTransaction, transactionController.create);
router.put('/transactions/:id', step('PUT/transaction'), validateTransaction, transactionController.updateTransaction);
router.put('/transactions/:id/:itemToUp', step('PUT/transaction'), transactionController.updateOneField);
router.delete('/transactions/:id', step('DELETE/transaction'), transactionController.deleteOne);


export default router
