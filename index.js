const express = require("express");
const server = express();
const axios = require("axios");

// const db = require("./data/data.js");

let db = [
    {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
    },

    {
        title: 'Zelda', 
        genre: 'Console', 
        releaseYear: 1992 
    },

    {
        title: 'Pokemon', 
        genre: 'Console', 
        releaseYear: 1985 
    },

    {
        title: 'Doom', 
        genre: 'PC', 
        releaseYear: 1995
    }
]

server.get("/games", (req,res) => {
    axios.get(db)
        .then(result => res.status(201).json(result))
        .catch(err => res.status(500).json({errorMessage: "There was an error with posting data from the server"}));
})

server.post("/games", (req,res) => {
    if(!req.body.title || !req.body.genre) {

        res.status(422).json({errorMessage: "You are missing the title or genre of the game"})

    }
    else{

        axios.post(db, req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(500).json({errorMessage: "There was an error with posting data from the server"}));
    
        }
})

module.exports = server;
