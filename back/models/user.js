import { Schema } from "mongoose";
import mongoose from "mongoose";
import {hashPasswordBeforeSave} from '../middleware/hashingBeforeSave.js'
const userSchema = new Schema ( {
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"], 
    },
    
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre('save',hashPasswordBeforeSave);
const User = mongoose.model('User', userSchema);
export default User;