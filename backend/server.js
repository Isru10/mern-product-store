// FORGOT LOTS OF CODE 
// import express from 'express';
// import path from 'path';

// const app = express();

// // Middleware for parsing JSON
// app.use(express.json());

// // Serve static files from the React app
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/frontend/dist')));

// // API routes (add your actual API routes here)
// app.use('/api', (req, res) => {
//   res.send({ message: 'API is working' });
// });

// // Catch-all handler for any request that doesn't match an API route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// SEEMS CORRECT

import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body
 
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV==="production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});




















// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js"
// import path from "path";
// dotenv.config();
// const app  = express();
// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();
// app.use(express.json()); 



// app.use("/api/products", productRoutes);
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, "/frontend/dist")));
//     app.get("*",(req, res)=>{
//       res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//     });
// }

// // console.log(process.env.MONGO_URI);



// app.listen(PORT , ()=>{
//   // console.log(process.env.MONGO_URI);
  
//   connectDB();
//     console.log('server at ' + PORT); 
// });












// LAST TIME 

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');

// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });