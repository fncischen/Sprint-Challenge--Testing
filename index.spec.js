const server = require("./index.js");

var bodyParser = require('body-parser')
const request = require('supertest'); 

// check https://github.com/visionmedia/supertest for supertest methods

describe("POST /game", () => {

    // baseline tests
    it("Check for CORRECT status code returned", async () => {
        const response = await request(server).post('/games');

        const correctStatusCode = 500;
        // because we havent posted anything

        expect(response.status).toEqual(correctStatusCode);
    
    })

    it("Is the data in the right format?", async () => {
        const response = await request(server).post("/games");

        var game = {title: 'Donkey Kong', genre: "Console", released: 1992};

        expect(game).toHaveProperty("title", "Donkey Kong");
        expect(game).toHaveProperty("genre", "Console");
    })

    it("Is the data body in the request correct?", () => {

        var game = {title: 'Donkey Kong', genre: "Console", releaseYear: 1992};

        request(server).post("/games").send({title: 'Donkey Kong', genre: "Console", releaseYear: 1992}).set('Accept', 'application/json')
        .expect('Content-Type', /json/).expect(200);;
    })

    // custom unique tests for the system, specifically for this method


})


describe("GET /game", () => {

    // baseline tests
    it("Check for correct status code returned", async () => {
        const response = await request(server).get('/games');

        const correctStatusCode = 200;

        expect(response.status).toEqual(correctStatusCode);
    })

    it("Is the data in the right format?", async () => {
        const response = await request(server).get("/games");

        expect(response.type).toEqual('application/json');
    })

    it("Is the data body in the request correct?", (done) => {
        request(server).get("/games").expect(200, done);
        
    })

    // custom unique tests for the system, specifically for this method



})