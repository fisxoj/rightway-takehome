const { guard, either6, constant, array, object, string } = require("decoders");

const id = guard(string);

const resource = guard(either6(constant("people"), constant("planets"), constant("films"), constant("species"), constant("vehicles"), constant("starships")));

const people = guard(object({
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: array(string),
    species: array(string),
    vehicles: array(string),
    starships: array(string),
    created: string,
    edited: string,
    url: string,
}))

const planets = guard(object({
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
    residents: array(string),
    films: array(string),
    created: string,
    edited: string,
    url: string,
}))

const films = guard(object({
    title: string,
    episode_id: string,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    characters: array(string),
    planets: array(string),
    starships: array(string),
    vehicles: array(string),
    species: array(string),
    created: string,
    edited: string,
    url: string,
}))

const species = guard(object({
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
    eye_colors: string,
    average_lifespan: string,
    homeworld: string,
    language: string,
    people: array(string),
    films: array(string),
    created: string,
    edited: string,
    url: string,
}))

const vehicles = guard(object({
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    vehicle_class: string,
    pilots: array(string),
    films: array(string),
    created: string,
    edited: string,
    url: string,
}))

const starships = guard(object({
    name: string,
    model: string,
    manufacturer: string,
    const_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: array(string),
    films: array(string),
    created: string,
    edited: string,
    url: string,
}))

const decoders = {
    people,
    planets,
    films,
    species,
    vehicles,
    starships
};

module.exports = {
    decoders: decoders,
    idDecoder: id,
    resourceDecoder: resource,
};
