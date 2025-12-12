import mongoose from 'mongoose';
import joi from "joi";

const transactionSchema = new mongoose.Schema({
    amount: Number,
    transaction_name: String,
    transaction_category: String,
    transaction_date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})
const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;