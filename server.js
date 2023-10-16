const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let database = ['Sparkles', 'Jumpy', 'Macy', 'Gogi', 'Barry', 'Banjo', 'Messi', 'Binx', 'Comet']

//we are going to use express.static()
//what it does, is it takes the path to a folder in my project as a parameter
//and it does some "black magic" to make it so there are GET endpoints associated with
//every file in that folder
//so once we do this express.static()
//there will be a GET endpoint, '/index.html' that serves the HTML file as a response,
//a GET enpoint, '/main.js' that serves the JS file as a response,
//a GET enpoint, '/styles.css', that serves the CSS file as a response
//a GET endpoint, '/', that serves index.html's HTML specifically
app.use(express.static(__dirname + '/public'))

app.get('/cat', (req, res) => {
    let randomIndex = Math.floor(Math.random() * database.length + 1)
    res.status(200).send(database[randomIndex])
})

app.listen(4000, () => {
    console.log(`Server running on port 4000`)
})