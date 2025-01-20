const userModel = require("../models/userModel")

module.exports.homeController = async (req, res) => {

        try {
                const users = await userModel.find()
                res.render("index", { users })

        } catch (error) {
                res.render("error", { error })

        }




}
