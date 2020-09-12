const recordTransformer = (type, attributes, relationships) => (id, document) => ({
    id,
    type,
    attributes: Object.assign({}, ...attributes.map(key => ({ [key]: document[key] }))),
    relationships: Object.assign({}, ...relationships.map(key => ({
        [key]: document[key].map(url => ({ self: url }))
    })))
})


const people = recordTransformer("people", ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender", "homeworld", "created", "edited"], ["films", "species", "vehicles", "starships"]);

const planets = recordTransformer("planets", ["name", "rotation_period", "orbital_period", "diameter", "climate", "gravity", "terrain", "surface_water", "population", "created", "edited"], ["residents", "films"]);

const films = recordTransformer("films", ["title", "episode_id", "opening_crawl", "director", "producer", "release_date", "created", "edited"], ["planets", "starships", "vehicles", "species"]);

const species = recordTransformer("species", ["name", "classification", "designation", "average_height", "skin_colors", "hair_colors", "eye_colors", "average_lifespan", "homeworld", "language", "created", "edited"]);

const vehicles = recordTransformer("vehicles", ["name", "model", "manufacturer", "cost_in_credits", "length", "max_atmosphering_speed", "crew", "passengers", "cargo_capacity", "consumables", "vehicle_class", "created", "edited"], ["pilots", "films"]);

const starships = recordTransformer("starships", ["name", "model", "manufacturer", "cost_in_credits", "length", "max_atmosphering_speed", "crew", "passengers", "cargo_capacity", "consumables", "hyperdrive_rating", "MGLT", "starship_class", "created", "edited"], ["pilots", "films"]);


module.exports = { people, planets, films, species, vehicles, starships };
