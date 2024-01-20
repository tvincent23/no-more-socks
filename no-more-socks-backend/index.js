import express from 'express'
import cors from 'cors'


// initialize the app
const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())


let data = [
    {
      "name": "Tyler",
      "gift": "bike",
      "id": "1234567890",
      "comments": "This is a great gift for anyone who loves to bike. It's a new bike, so it's sure to be a hit!",
      "purchased": false

    },
    {
      "name": "Tyler",
      "gift": "video game",
      "id": "9876543210",
      "comments": "This is a great gift for anyone who loves video games. It's a new game, so it's sure to be a hit!",
      "purchased": false
    },
    {
      "name": "Tyler",
      "gift": "shoes",
      "id": "0123456789",
      "comments": "This is a great gift for anyone who loves shoes. It's a new pair of shoes, so it's sure to be a hit!",
      "purchased": false
    }

  ]

// Tyler's routes
app.get('/receiver', async function(req, res) {
    console.log('get request received')
    res.status(200).json(data)

})

app.post('/receiver', async function(req, res) {
    console.log('post request received')
    console.log(req.body)
    const incomingGift = req.body
    data.push(incomingGift)
    res.status(200).json(data)
})

// app.delete('/receiver/:id', async function(req, res) {
//     console.log(req.params.id)
//     const id = req.params.id

//     // return to me all the gifts whose id doesnt match with the id
//     const updatedData = data.filter(giftObject => giftObject != id)
//     res.status(200).json(updatedData)
// })

// Mom's routes
app.get('/giver', async function(req, res) {
    console.log('get request received for moms route')
    res.status(200).json(data)
})

// mum's purchased gift route
app.put('/giver/:id', async function(req, res) {
    console.log('put request from mom received')
    const id = req.params.id
    const giftToBePurchased = data.find(giftObject => giftObject.id === id)
    giftToBePurchased.purchased = true
    console.log(giftToBePurchased)
    res.status(200).json(data)
})

// Start the server and listen on the specified port
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
   });

