import * as dbConfig from "../config";
import mongoose from "mongoose";
import { INewbieAccount, NewbieAccountSchema } from "../Documents/AccountDocument";

const mongodbURI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/portal_newbie_dev';
const mongodbOption = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(mongodbURI, mongodbOption)
    .then(() => console.log('Successfully connected to mongoDB'))
    .catch((err) => {
        console.log('Error on mongoDB connecting: ' + err.stack);
        process.exit(1);
});

export const secret = dbConfig.KEY.secret;

export const NewbieAccount = mongoose.model<INewbieAccount>("NewbieAccount", NewbieAccountSchema);