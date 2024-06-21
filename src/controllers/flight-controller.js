const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      message: "flight Successfully created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed flight creation",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flight,
      message: "flight Successfully fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed flight fetching",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
