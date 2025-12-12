import joi from 'joi';
import {transactionSchema} from "./validateTransaction.js";

export const budgetSchema = joi.object({
    budget_month: joi.string().required(),
    budget_goal: joi.number().required(),
})

export async function validateBudget(req, res, next) {
    const { error } = budgetSchema.validate(req.body);
    if (error) {
        return res.status(400).send({error: error.message});
    }
    next();
}