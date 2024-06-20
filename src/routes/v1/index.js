const express = require("express");
const CityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.post("/citybulk", CityController.bulk);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getAll);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/cityAirport/:id", CityController.getAirport);

router.post("/airport", AirportController.create);
router.post("/airportbulk", AirportController.bulk);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getall);
router.delete("/airport/:id", AirportController.destroy);
router.patch("/airport/:id", AirportController.update);

module.exports = router;
