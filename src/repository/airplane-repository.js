const { Airplane } = require("../models/index");
const { where, Op } = require("sequelize");

class AirplaneRepository {
  async createAirplane(data) {
    try {
      const airplane = await Airplane.create(data);
      return airplane;
    } catch (error) {
      console.log(
        "Something went wrong in the airplane repository layer",
        error
      );
      throw { error };
    }
  }

  async bulkAirplane(data) {
    try {
      const airplane = await Airplane.bulkCreate(data);
      return airplane;
    } catch (error) {
      console.log(
        "Something went wrong in the airplane repository layer",
        error
      );
      throw { error };
    }
  }

  async getAirplane(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      return airplane;
    } catch (error) {
      console.log(
        "Something went wrong in the airplane repository layer",
        error
      );
      throw { error };
    }
  }

  async getallAirplane(filter) {
    try {
      if (filter.name) {
        const airplane = await Airplane.findOne({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return airplane;
      } else {
        const airplane = await Airplane.findAll();
        return airplane;
      }
    } catch (error) {
      console.log(
        "Something went wrong in the airplane repository layer",
        error
      );
      throw { error };
    }
  }

  async updateAirplane(airplaneId, data) {
    try {
      const airplane = await Airplane.findByPk(airplaneId);
      airplane.name = data.name;
      await airplane.save();
      return airplane;
    } catch (error) {
      console.log(
        "Something went wrong in the airplane repository layer",
        error
      );
      throw { error };
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const airplane = await Airplane.destroy({
        where: {
          id: airplaneId,
        },
      });

      return airplane;
    } catch (error) {
      console.log(
        "Something went wrong in the airplane repository layer",
        error
      );
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
