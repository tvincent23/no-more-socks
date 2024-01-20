import express from 'express'


// initialize the app
const app = express()
const PORT = 8080

// set up the routes
app.get('/receiver', async function(req, res) {
    console.log('get request received')
    res.status(200).json({})

})

// Start the server and listen on the specified port
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
   });

