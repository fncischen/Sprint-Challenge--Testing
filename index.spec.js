const server = require("./index.js");
const request = require('supertest'); 

// check https://github.com/visionmedia/supertest for supertest methods

describe("POST /game", () => {

    // baseline tests
    it("Check for CORRECT status code returned", async () => {
        const response = await request(server).post('/games');

        const correctStatusCode = 201;

        expect(response.status).toEqual(correctStatusCode);
    
    })

    it("Is the data in the right format?", async () => {
        const response = await request(server).post("/games");

        var game = {title: 'Donkey Kong', genre: "Console", released: 1992};

        expect(game.type).toEqual('application/json');
    })

    it("Is the data body in the request correct?", async () => {
        const response = await request(server).post("/games")
        
        var game = {title: 'Donkey Kong', genre: "Console", released: 1992};

        response.send(game).expect(201, done);
    })

    // custom unique tests for the system, specifically for this method


})


describe("GET /game", () => {

    // baseline tests
    it("Check for correct status code returned", async () => {
        const response = await request(server).get('/games');

        const correctStatusCode = 201;

        expect(response.status).toEqual(correctStatusCode);
    })

    it("Is the data in the right format?", async () => {
        const response = await request(server).get("/games");

        expect(response.type).toEqual('application/json');
    })

    it("Is the data body in the request correct?", async () => {
        const response = await request(server).get("/games")
        respone.expect(201, done);
        
    })

    // custom unique tests for the system, specifically for this method



})