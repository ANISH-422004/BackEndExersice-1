const userModel = require("../models/userModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


module.exports.homeController = async (req, res) => {
  try {
    const users = await userModel.find();
    res.render("index", { users });
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.createController = (req, res) => {
  res.render("create");
};

module.exports.formController = async (req, res) => {
  console.log(req.body);

  try {
    const { username, profileImage, email, bio, gender, age } = req.body;

    const newUserData = new userModel({
      username,
      profileImage,
      email,
      bio,
      gender,
      age,
    });

    await newUserData.save();
    res.redirect("/");
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.showEachController = async (req, res) => {
  try {
    const requestedUserEmail = req.params.useremail;
    const user = await userModel.findOne({ email: requestedUserEmail });

    if (!user) {
      return res.render("error", { error: "User not found" });
    }

    res.render("show", { user });
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.deleteController = async (req, res) => {
  try {
    const requestedUserName = req.params.username;
    const user = await userModel.findOneAndDelete({ username: requestedUserName });

    if (!user) {
      return res.render("error", { error: "User not found" });
    }

    res.redirect("/");
  } catch (error) {
    res.render("error", { error });
  }
};

module.exports.showeditController = async (req, res) => {
  try {
    const dbId = req.params.dbId;
    // console.log(req.params);

    // Validate if dbId is a valid MongoDB ObjectId
    if (!ObjectId.isValid(dbId)) {
      return res.render("error", { error: "Invalid User ID" });
    }


    const user = await userModel.findOne({ _id: new ObjectId(dbId) });

    if (!user) {
      return res.render("error", { error: "User not found" });
    }

    res.render("edit", { user });
  } catch (error) {
    res.render("error", { error });
  }
};



module.exports.editController = async (req, res) => {
  try {
    const dbId = req.params.dbId;
    if (!ObjectId.isValid(dbId)) {
      return res.render("error", { error: "Invalid User ID" });
    }
    const userforUpdate = await userModel.findOne({ _id: new ObjectId(dbId) });

    
    
    const { username, profileImage, email, bio, gender, age } = req.body;

    await userModel.findOneAndUpdate(userforUpdate  , { username, profileImage, email, bio, gender, age } )
    res.redirect("/")

  } catch (error) {
    res.render("error", { error });
  }
}
