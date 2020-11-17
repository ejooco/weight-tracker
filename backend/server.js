const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// contains URI for MONGO ATLAS to connect to DB
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//This comes from the .env file in the backend directory
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Connecting routes to files
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const entriesRouter = require('./routes/weight-tracker-entries');
app.use('/weight-tracker-entries', entriesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});