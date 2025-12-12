import app from './src/app.js';
import dotenv from 'dotenv';
import {connectToDatabase} from "./src/config/dbConnection.js";

dotenv.config();

const port = process.env.PORT;
const mongoUrl = process.env.MONGODB_URL;
if (mongoUrl === undefined) {
    throw 'MongoDB URL must be defined';
}

try{
    console.log('connecting to database...');
    await connectToDatabase(mongoUrl);
    app.listen(port);
    console.log(`Server is running on port: http://localhost:${port}`);
} catch(error){}