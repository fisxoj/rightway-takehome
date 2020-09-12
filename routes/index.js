var express = require('express');
var router = express.Router();

const transformers = require("../JSONApi");
const SWApi = require("../SWApi");
const { resourceDecoder, idDecoder } = require("../decoders");

/* GET home page. */
router.get('/:resource', function(request, response) {
    response.header("Content-Type", "application/vnd.api+json");

    const resource = resourceDecoder(request.params.resource);
    const transformer = transformers[resource];
    const idExtractor = (document) => {
        const linkParts = document.url.split("/");
        return linkParts[linkParts.length - 2];
    }

    new SWApi(resource)
        .getAll()
        .then(documents => documents.map(document => transformer(idExtractor(document), document)))
        .then(resources => response.send({ data: resources }))
        .catch(err => response.send({ error: "An error happened" }))
});

router.get("/:resource/:id", (request, response) => {
    response.header("Content-Type", "application/vnd.api+json")

    const resource = resourceDecoder(request.params.resource);
    const id = idDecoder(request.params.id);
    const transformer = transformers[resource];

    new SWApi(resource)
        .getOne(id)
        .then(document => transformer(id, document))
        .then(resource => response.send({ data: resource }))
        .catch(error => response.send({ error: "An error happened" }))
})


module.exports = router;
