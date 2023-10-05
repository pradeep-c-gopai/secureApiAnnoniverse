const express = require('express');

require('dotenv').config();

const bodyParser = require('body-parser');

const cors = require('cors'); 

const app = express();

// process.on("unhandledRejection", function(reason, p){}); 

// process.on("uncaughtException", function(reason, p){}); 

app.use(express.urlencoded({extended: true }));

app.use(bodyParser.json());

const eventRouter = require("./routes/endpoints");

app.use(express.json());

app.use(cors({
    origin : '*',
    methods : 'POST, GET, OPTIONS, DELETE',
    credentials : false
}));

app.use("/api",eventRouter);

const port = process.env.PORT || 3000;

app.listen(port, function(err){
    
    if(err)
    {
        console.log(`Error in runnig the server: ${port}`);
    }

    console.log(`Server is running on port: ${port}`);

});
