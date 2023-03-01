// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();

// const uri = "mongodb+srv://tomkwon:4970318tomkwon@cluster0.yskhy4h.mongodb.net/?retryWrites=true&w=majority"

// async function connect() {
//     try {
//         await mongoose.connect(uri)
//         console.log("Connected to MongoDB");
//     } catch(error) {
//         console.log(error);
//     }
// }

// connect();

// app.listen(8000,() => {
//     console.log("Server started on port 8000");
// });

import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews",reviews);
app.use("*",(req,res) => res.status(404).json({error: "not found"}));

export default app






































