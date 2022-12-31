const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");

const app = express();
app.use(express.json());
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();



const loginRouter = require ('./routes/login')
app.use ('/login', loginRouter);
const registerRouter = require ('./routes/join')
app.use ('/join', registerRouter);

const jwt = require("jsonwebtoken"); 
var nodemailer = require("nodemailer");
const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const port =  5000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});