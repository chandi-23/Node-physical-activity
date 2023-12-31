import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/index.js';
//import model from './models/index.js';

const app = express();

mongoose.connect("mongodb+srv://chandreshlokesh:NewConnectionPwd@cluster0.typvrcl.mongodb.net/?retryWrites=true&w=majority", ()=>{
    console.log('connected to mongoDB');
});
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
/**
 * very important step
 * we are enrouting our requests to routes.index.js file here
 */

routes(app);

export default app;