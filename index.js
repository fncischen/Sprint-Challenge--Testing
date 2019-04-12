const express = require("express");
const server = express();
const axios = require("axios");

const db = require("./data/data.js");

server.get("/games", (req,res) => {
    axios.get(db)
        .then()
        .catch();
})

server.post("/games", (req,res) => {
    if(!req.body.title || !req.body.genre) {

        res.status(422).json({errorMessage: "You are missing the title or genre of the game"})

    }
    else{

        axios.post(db, req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(500).json({errorMessage: "There was an error with retrieving data from the server"}));
    
        }
})

export default server;
