import joi from 'joi';

export const transactionSchema = joi.object({
    amount: joi.number().required(),
    transaction_name: joi.string().required(),
    transaction_category: joi.string().required(),
    transaction_date: joi.date().optional(),
})

export async function validateTransaction(req, res, next) {
    const { error } = transactionSchema.validate(req.body);
    if (error) {
        return res.status(400).send({error: error.message});
    }
    next();
}