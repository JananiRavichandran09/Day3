// schema - collection structure

import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    designation:String
})

export const Employee = mongoose.model('Employee', empSchema)

