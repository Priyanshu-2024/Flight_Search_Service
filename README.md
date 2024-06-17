# Welcome to Flights Services

### Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviroment variables
    - `PORT=3000`
- Inside the `src/config` folder create a new config.json and the following piece of json.

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "Flights_Dev_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above go to src folder from your terminal and execute `npx sequelize db:create`

and then execute `npx sequelize db:migrate`
```

## DB Design
 - Airplane Table
 - Flight
 - Airport
 - City

 - A Flight belongs to an Airplane but one airplane can be used in many Flights.
 - A city has many airports but one airport belongs to a city.
 - One airport can have many flights, but a flight belongs to one airport. 