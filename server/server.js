const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:'./config.env'});
const port = process.env.PORT||8000;

//use middleware
// bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

//mongodb connection
const con = require('./db/connection');

//use routes 
app.use(require('./routes/route'));

con.then(db=>{
    if(!db) return process.exit(1);

    //listen to the server
    app.listen(port,()=>{
        console.log(`Server is running on port: ${port}`)
    })

    app.on('error',err=>console.log(`Failed To Connect Server: ${err}`));
    //error in mongodb connection
}).catch(err=>{
    console.log(`Connection Failed...!${error}`);
})
