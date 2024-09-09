// const express = require("express");

import express from 'express';
import cookieParser from 'cookie-parser';

import movieRoutes from "./rotues/movie.route.js"
import authRoutes from "./rotues/auth.route.js"
import tvRoutes from "./rotues/tv.route.js"
import searchRoutes from "./rotues/search.route.js"
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express()
const PORT = ENV_VARS.PORT;


// Middleware
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movies",protectRoute, movieRoutes)
app.use("/api/v1/tv",protectRoute, tvRoutes)
app.use("/api/v1/search",protectRoute, searchRoutes)

app.listen(PORT, () => {

    console.log("Server is running at http://localhost:" + PORT)
    connectDB();

})
