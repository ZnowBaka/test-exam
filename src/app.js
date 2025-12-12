import express from 'express';
import morgan from 'morgan'
import transRoutes from './routes/transactionRoutes.js';
import budgetRoutes from './routes/budgetRoutes.js';
import * as path from "node:path";
const app = express();
//middleware--
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static('public'));
//routes--
app.use('/api',transRoutes);
app.use('/api', budgetRoutes);

app.use('/',(req,res)=>{
    res.sendFile(path.resolve('./public/index.html'));
})

export default app