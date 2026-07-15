import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js';

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(MONGO_URI).then(() => {
    console.log(`Connected to mongodb container`);
})
.catch((error) => {
    console.error(`Error connecting to mongodb container: ${error}`);
});

app.use('/api/v1/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})