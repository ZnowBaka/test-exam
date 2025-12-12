import Transaction from '../models/transactionModel.js';

export async function getTransactions(req, res) {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({error: err});
    }
}

export async function create(req, res) {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({error: err});
    }
}
export async function updateOneField(req, res) {
    try {
        const transaction = await Transaction.findByIdAndUpdate(
            req.params.id,
            {$set: {[req.params.itemToUp]: req.body.toUp}},
            {new: true}
        );
        if (!transaction) {
            return res.status(404).json({error: "Transaction not found"});
        }

        res.status(200).json(transaction);

    } catch (err) {
        res.status(500).json({error: err.message});
    }
}
export async function updateTransaction(req, res) {
    try{
        const transaction = await Transaction.findOneAndReplace(
            {_id: req.params.id},
            req.body,
            {new: true}
        );
        res.status(200).json(transaction);
    } catch (err) {
        res.status(500).json({error: err});
    }
}
export async function deleteOne(req, res) {
    try{
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json(transaction);
    }catch(err){
        res.status(500).json({error: err});
    }
}
