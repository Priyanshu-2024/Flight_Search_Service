const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport(data, cityId) {
    try {
      const airports = this.airportRepository.createAirport(data, cityId);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the airport service layer");
      throw { error };
    }
  }

  async bulkAirport(data, cityId) {
    try {
      const airports = this.airportRepository.bulkAirport(data, cityId);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the airport service layer");
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airports = this.airportRepository.getAirport(airportId);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the airport service layer");
      throw { error };
    }
  }

  async getallAirport(filter) {
    try {
      const airports = this.airportRepository.getallAirport(filter);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the airport service layer");
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airports = this.airportRepository.updateAirport(airportId, data);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the airport service layer");
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const airports = this.airportRepository.deleteAirport(airportId);
      return airports;
    } catch (error) {
      console.log("Something went wrong in the airport service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
