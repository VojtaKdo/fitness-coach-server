import express from "express";
import dotenv from "dotenv";
dotenv.config();    //načte .env soubor do process.env
//zavoláme process.env.PORT
import cors = require("cors");

const app = express();
app.use(express.json());    //aplikaci komunikuje přes JSON
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(`/api/v${process.env.API_VER}/user`, require("./routes/user"));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})