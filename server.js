const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config({ path: "/config/.env" });

app.use(express.json());



// mongoose.connect(mongourl,(err)=>{

//     err ? console.log(err) : console.log('database is connected')

// })



mongoose.connect(process.env.mongourl,(err)=>{

    err ? console.log(err) : console.log('database is connected')

})


app.use('/users',require('./routes/userRoute'))
const port =5000


app.listen(port,(err)=>{
    err ? console.log(err) : console.log('server is running in port 5000')
})