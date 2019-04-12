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

    // search for custom match methods
    // https://jestjs.io/docs/en/expect#tomatchregexporstring
    it("existing title of a game exists", () => {

        var game = {id: 4, title: 'Donkey Kong', genre: "Console", releaseYear: 1992};
        const response = request(server).get('/games').send(game).expect(405);
    
    })

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

    it("Can we get the list of all games?", (done) => {
        request(server).get("/games").expect(200, done);
        
    })

    // custom unique tests for the system, specifically for this method

    // checking for incorrect id? 
    it("Is the data body in the request for the game ID correct?", (done) => {
        request(server).get('/games/0').expect(200, done)
    //     .end(err => { if (err) return done(err).
    //     done();

    // })

    })

})