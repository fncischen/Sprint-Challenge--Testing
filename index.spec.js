const server = require("./index.js");
const request = require('supertest'); 

describe("POST /game", () => {

    // baseline tests
    it("Check for correct status code returned", async () => {
        
    })

    it("Is the data in the right format?", async () => {
        
    })

    it("Is the data body in the request correct?", async () => {
        const response = await request(server).post("/game")
    })

    // custom unique tests for the system, specifically for this method


})


describe("GET /game", () => {

    // baseline tests
    it("Check for correct status code returned", async () => {
        
    })

    it("Is the data in the right format?", async () => {
        
    })

    it("Is the data body in the request correct?", async () => {
        const response = await request(server).get("/game")
        
    })

    // custom unique tests for the system, specifically for this method



})