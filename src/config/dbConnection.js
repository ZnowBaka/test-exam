import mongoose from 'mongoose';

export async function connectToDatabase(url) {
    await mongoose.connect(url, {})
    .then(() => {console.log('MongoDB Connected!')})
    .catch(err => console.log(err));
}