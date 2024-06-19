const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in ths service layer");
      throw { error };
    }
  }

  async bulkCreate(data) {
    try {
      const city = this.CityRepository.bulkCreate(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in ths service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const city = this.CityRepository.deleteCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in ths service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in ths service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in ths service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = this.CityRepository.getAllCities(filter);
      return cities;
    } catch (error) {
      console.log("Something went wrong in ths service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
