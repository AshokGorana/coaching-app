import mongoose, { Schema, model } from 'mongoose';

mongoose.connect("mongodb://localhost:27017/coaching-app");

const UserSchema = new Schema({
   name: {type: String, unique: true},
   gmail: {type: String, unique: true},
   password: {type: String, unique: true}
});

export const UserModel = model("User", UserSchema);