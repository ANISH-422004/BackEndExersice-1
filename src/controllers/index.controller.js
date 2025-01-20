const userModel = require("../models/userModel");

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
      username: username,
      profileImage: profileImage,
      email: email,
      bio: bio,
      gender: gender,
      age: age,
    });

    await newUserData.save();
    res.redirect("/");
  } catch (error) {
    res.render("error", { error });
  }
};
module.exports.showEachController = async(req, res) => {
        console.log()        
        try {
                const requestedUserEmail = req.params.useremail
                const user =  await userModel.findOne({email : requestedUserEmail})
                res.render("show",{user})
        } catch (error) {
                res.render("error", { error });
        }


      };