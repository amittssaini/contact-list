const express = require('express');
const mongoose = require('mongoose');
const contactRouter = require('./routes/contact.route')
const cors = require('cors');
require("dotenv").config();

const app =  express();
mongoose
.connect(process.env.DB_URI)
.then(()=>{
    console.log("db is connected");
    app.listen(8082,()=>console.log("server is started "));   
})
.catch((error)=>console.log("DB IS NOT CONECTED ",error));

app.use(cors());
app.use(express.json());
app.use("/api/contact",contactRouter);


