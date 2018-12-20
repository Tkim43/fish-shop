const express = require('express');
// cors is for cross origin stuff IDEALLY YOU want to disable this unless you want a 
// open API
const cors = require('cors');

const {resolve} = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
// this is how you encode stuff in the URL this has to do with post request
app.use(express.urlencoded({extended: false}));
// json is for sending json in your post request
app.use(express.json());

// app.use(express.static());

// this is routing to the back end 
app.get('/', (req, res) =>{
    res.send('<h1>server is now running</h1>');
});

app.listen(PORT, ()=>{
    console.log('Server running on PORT:' + PORT);
}).on('Error', (err) => {
    console.log('Listen Error: You already have a server running on Post:' + PORT);
})