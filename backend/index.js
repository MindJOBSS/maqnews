import express from "express";
import { PORT, mongodbURL } from "./config.js"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import {router} from "./routes/newsModel.js"


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/" , router);


app.get("/", (req, res) => {
    console.log(req);
    res.status(234).send("connection successful");
});





mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("connection successfull")
        app.listen(PORT, () => {
            console.log(`running on ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    });