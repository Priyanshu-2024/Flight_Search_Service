const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      message: "airport Successfully created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airport creation",
      err: error,
    });
  }
};

const bulk = async (req, res) => {
  try {
    const airport = await airportService.bulkAirport(req.body);
    return res.status(201).json({
      data: airport,
      message: "airports Successfully created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airports creation",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    console.log(airport);
    return res.status(200).json({
      data: airport,
      message: "airport Successfully fetching",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airport fetched",
      err: error,
    });
  }
};

const getall = async (req, res) => {
  try {
    const airport = await airportService.getallAirport(req.query);
    return res.status(200).json({
      data: airport,
      message: "airport Successfully fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airport fetching",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airport = await airportService.updateAirport(req.params.id, req.body);
    return res.status(201).json({
      data: airport,
      message: "airport Successfully Updated",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airport updation",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const airport = await airportService.deleteAirport(req.params.id);
    return res.status(201).json({
      data: airport,
      message: "airport Successfully deleted",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airport deletion",
      err: error,
    });
  }
};

module.exports = {
  getall,
  get,
  destroy,
  update,
  create,
  bulk,
};
