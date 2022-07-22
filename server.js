//require express
const express = require('express');
const path = require('path');

//require routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT||5000;
const app = express();
//const mainDir = path.join(__dirname, "/public");

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//use routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

//listen
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))