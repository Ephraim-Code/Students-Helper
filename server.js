const express = require('express');
const connectDB = require('./config/db');
const userRoute = require("./routes/api/users");
const authRoute = require("./routes/api/auth");
const postRoute = require("./routes/api/posts");
const profileRoute = require("./routes/api/profile");


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Definig various Routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);  
app.use("/api/profile", profileRoute);  

const PORT = process.env.PORT || 5000;
    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
