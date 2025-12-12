import Budget from '../models/budgetModel.js';

export async function getBudgets(req, res) {
    try {
        const budgets = await Budget.find();
        res.status(200).json(budgets);
    } catch (err) {
        res.status(500).json({error: err});
    }
}

export async function create(req, res) {
    try {
        const newBudget = new Budget(req.body);
        await newBudget.save();
        res.status(201).json(newBudget);
    } catch (err) {
        res.status(400).json({error: err});
    }
}
