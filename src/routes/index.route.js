const express = require("express")
const router =express.Router()
const controller = require("../controllers/index.controller")

router.get("/" , controller.homeController)
router.get("/create", controller.createController)
router.post("/create", controller.formController)

module.exports = router; 