const { City } = require("../models/index");
const { where, Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name: name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //by using below approach will get array but not the data changed
      // const city = await City.update(data,{
      //   where : {
      //     id:cityId
      //   }
      // });

      //for getting updated data use below approach
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {}
  }

  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      } else {
        const cities = await City.findAll();
        return cities;
      }
    } catch (error) {}
  }
}

module.exports = CityRepository;
