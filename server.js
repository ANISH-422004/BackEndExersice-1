// server start 

const app = require("./src/app")

app.listen(3000 ,()=>{
    console.log("server running on 3000")
} )


// databse Connection

const DBconnect = require("./src/db/db")
DBconnect()