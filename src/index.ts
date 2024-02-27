import express from "express";
import dotenv from "dotenv";
dotenv.config();    //načte .env soubor do process.env
//zavoláme process.env.PORT
import cors = require("cors");
import cookieparser from "cookie-parser";
import db from "./models/index";

const app = express();
app.use(express.json());    //aplikaci komunikuje přes JSON
app.use(cors());
app.use(cookieparser());

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true, alter: true }).then(async () =>{
    const userRolesData = [
    {
        name: "user",
    },
    {
        name: "admin",
    },
    {
        name: "role",
    },
]
    await db.accountRole.bulkCreate(userRolesData);
});  //forcene změnu i když ztratí data a alter se bude snažit ty data zachovat

app.use(`/api/v${process.env.API_VER}/user`, require("./routes/user"));
app.use(`/api/v${process.env.API_VER}/friendList`, require("./routes/friendList"));
app.use(`/api/v${process.env.API_VER}/achievements`, require("./routes/achievements"));
app.use(`/api/v${process.env.API_VER}/meals`, require("./routes/meals"));
app.use(`/api/v${process.env.API_VER}/food`, require("./routes/food"));
app.use(`/api/v${process.env.API_VER}/exercises`, require("./routes/exercises"));
app.use(`/api/v${process.env.API_VER}/plans`, require("./routes/plans"));
app.use(`/api/v${process.env.API_VER}/exercise_categories`, require("./routes/exercise_categories"));
app.use(`/api/v${process.env.API_VER}/admin`, require("./routes/admin"));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})