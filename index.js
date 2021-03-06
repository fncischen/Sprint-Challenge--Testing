const express = require("express");
const server = express();
const axios = require("axios");
var bodyParser = require('body-parser');
// const db = require("./data/data.js");

let db = [
    {
    id: 0,
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
    },

    {
        id: 1,
        title: 'Zelda', 
        genre: 'Console', 
        releaseYear: 1992 
    },

    {
        id: 2,
        title: 'Pokemon', 
        genre: 'Console', 
        releaseYear: 1985 
    },

    {
        id: 3,
        title: 'Doom', 
        genre: 'PC', 
        releaseYear: 1995
    },

    {id: 4,
    title: 'Donkey Kong', 
    genre: "Console", 
    releaseYear: 1992}
]

server.use(express.json());

server.get("/games", (req,res) => {
    // axios.get(db)
    //     .then(result => res.status(201).json(result))
    //     .catch(err => res.status(500).json({errorMessage: "There was an error with posting data from the server"}));
    res.json(db);
})

server.post("/games", (req,res) => {
    if(!req.body.title || !req.body.genre) {

        res.status(422).json({errorMessage: "You are missing the title or genre of the game"})

    }
    else{
        let selectedGame = games.find(game => game.title == req.body.title).first();
        if(selectedGame) {
            res.status(405).json({errorMessage: "There is an existing title for this game."})
        }
        else{

        axios.post(db, req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(500).json({errorMessage: "There was an error with posting data from the server"}));
    
        }

        }
})

server.get("/games/:id", (req,res) => {
    let selectedGame = db.find(game => game.id == req.params.id);

    if(selectedGame){
        res.status(200).json(selectedGame);
    }
    else{
        res.status(404).json({errorMessage: "We cannot find the game you're looking for"})
    }

    // axios.get(db)
    //     .then(result => res.status(201).json(result))
    //     .catch(err => res.status(500).json({errorMessage: "There was an error with posting data from the server"}));

})

// server.listen(5000, () => {
//     console.log("Loading server localhost:5000")
// })
module.exports = server;
