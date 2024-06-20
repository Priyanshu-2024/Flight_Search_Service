const { AirplaneRepository } = require("../repository/index");

class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(data) {
    try {
      const airplane = this.airplaneRepository.createAirplane(data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer");
      throw { error };
    }
  }

  async bulkAirplane(data) {
    try {
      const airplane = this.airplaneRepository.bulkAirplane(data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer");
      throw { error };
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = this.airplaneRepository.getAirplane(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer");
      throw { error };
    }
  }

  async getallAirplane(filter) {
    try {
      const airplane = this.airplaneRepository.getallAirplane(filter);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer");
      throw { error };
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = this.airplaneRepository.updateAirplane(airplaneId, data);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer");
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const airplane = this.airplaneRepository.deleteAirplane(airplaneId);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the airplane service layer");
      throw { error };
    }
  }
}

module.exports = AirplaneService;
