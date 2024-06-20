const { where, Op } = require("sequelize");
const { Airport } = require("../models/index");

class AirportRepository {
  async createAirport(name, cityId) {
    try {
      const airports = await Airport.create(name, cityId);
      return airports;
    } catch (error) {
      console.log(
        "Something went wrong in the airport repository layer",
        error
      );
      throw { error };
    }
  }

  async bulkAirport(name, cityId) {
    try {
      const airports = await Airport.bulkCreate(name, cityId);
      return airports;
    } catch (error) {
      console.log(
        "Something went wrong in the airport repository layer",
        error
      );
      throw { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airports = await Airport.findByPk(airportId);
      return airports;
    } catch (error) {
      console.log(
        "Something went wrong in the airport repository layer",
        error
      );
      throw { error };
    }
  }

  async getallAirport(filter) {
    try {
      if (filter.name) {
        const airports = await Airport.findOne({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airports;
      } else {
        const airports = await Airport.findAll();
        return airports;
      }
    } catch (error) {
      console.log(
        "Something went wrong in the airport repository layer",
        error
      );
      throw { error };
    }
  }

  async updateAirport(airportId, data) {
    try {
      const airports = await Airport.findByPk(airportId);
      airports.name = data.name;
      await airports.save();
      return airports;
    } catch (error) {
      console.log(
        "Something went wrong in the airport repository layer",
        error
      );
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      const airports = await Airport.destroy({
        where: {
          id: airportId,
        },
      });

      return airports;
    } catch (error) {
      console.log(
        "Something went wrong in the airport repository layer",
        error
      );
      throw { error };
    }
  }
}

module.exports = AirportRepository;
