const express = require("express")
const app = express();
const indexRoutes = require("./routes/index.route")


app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.set("view engine","ejs")
app.set("views","./src/views")



app.use("/",indexRoutes )







module.exports = app;