const axios = require("axios");

const { decoders } = require("./decoders");
const API_BASE = "https://swapi.dev/api/";

class SWApi {
    constructor(resource) {
        this.resource = resource;
        this.client = axios.create({
            baseURL: API_BASE,
            timeout: 5000,
        })
    }

    getAll() {
        const decoder = decoders[this.resource];
        return this.client.get(`${this.resource}`)
                   .then(response => response.data.results.map(decoder))
    }

    getOne(id) {
        const decoder = decoders[this.resource];
        return this.client.get(`${this.resource}/${id}`)
                   .then(response => decoder(response.data))
    }
}

module.exports = SWApi;
