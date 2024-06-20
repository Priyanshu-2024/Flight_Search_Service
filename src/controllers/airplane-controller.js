const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.createAirplane(req.body);
    return res.status(201).json({
      data: airplane,
      message: "airplane Successfully created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airplane creation",
      err: error,
    });
  }
};

const bulk = async (req, res) => {
  try {
    const airplane = await airplaneService.bulkAirplane(req.body);
    return res.status(201).json({
      data: airplane,
      message: "airplane Successfully created",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airplane creation",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const airplane = await airplaneService.getAirplane(req.params.id);
    return res.status(200).json({
      data: airplane,
      message: "airplane Successfully fetching",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airplane fetched",
      err: error,
    });
  }
};

const getall = async (req, res) => {
  try {
    const airplane = await airplaneService.getallAirplane(req.query);
    return res.status(200).json({
      data: airplane,
      message: "airplane Successfully fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airplane fetching",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const airplane = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    return res.status(201).json({
      data: airplane,
      message: "airplane Successfully Updated",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airplane updation",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const airplane = await airplaneService.deleteAirplane(req.params.id);
    return res.status(201).json({
      data: airplane,
      message: "airplane Successfully deleted",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed airplane deletion",
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
