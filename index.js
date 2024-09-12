const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const dbConnection = require("./Configure/dbConnection");

// const UserRoutes = require("./Routes/UserRoutes");

const app = express();
app.use(cors());
dbConnection.dbConnect();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/",UserRoutes)
 

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});



