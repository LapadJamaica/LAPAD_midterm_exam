// import the Express framework
const express = require('express');

// create express app instance
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// define GET route at '/test'
app.get('/test', (req, res) => {
    // sends a JSON response with a message
    res.send({message: 'Express is working! Jamaica D. Lapad'});
});

// start the server and listen on port 3000
app.listen(3000, () => {
    // add successful message
    console.log('Server is running on port 3000');
});