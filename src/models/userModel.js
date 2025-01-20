const  mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    bio: {
      type: String,
    },
      gender:{
        type: String,
        enum: ["male", "female", "other"],
        default: "other",
      },
    age: {
      type: Number,
    },
  });
  
  const userModel = mongoose.model("users",userSchema)
  module.exports = userModel
