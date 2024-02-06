import express from "express";
import dotenv from "dotenv";
dotenv.config();    //načte .env soubor do process.env
//zavoláme process.env.PORT
import cors = require("cors");
import db from "./models/index";

const app = express();
app.use(express.json());    //aplikaci komunikuje přes JSON
app.use(cors());

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true, alter: true })  //forcene změnu i když ztratí data a alter se bude snažit ty data zachovat

app.use(`/api/v${process.env.API_VER}/user`, require("./routes/user"));
app.use(`/api/v${process.env.API_VER}/friends`, require("./routes/friends"));
app.use(`/api/v${process.env.API_VER}/achievements`, require("./routes/achievements"));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})