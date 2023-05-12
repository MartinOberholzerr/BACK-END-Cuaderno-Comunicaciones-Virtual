const express = require ("express");
const bodyParser = require ( "body-parser");
const mongoose = require ("mongoose");

const app = express ();

app.use (bodyParser.urlencoded({ extended: false }));
app.use (bodyParser. json () );
    
    mongoose. connect(
        "mongodb+srv://chikitomail:<password>@cluster0.hivpuap.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true },
        (err, res) => {
         err && console.log ("Error conectando a la bd");
         app.listen(4000, () => {
        console.log("servidor corriendo en ala ba http://localhost:4000"); 
        });
    }
)


