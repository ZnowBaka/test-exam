import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
    budget_month: String,
    budget_year: String,
})
const Budget = mongoose.model('Budget', budgetSchema);
export default Budget;