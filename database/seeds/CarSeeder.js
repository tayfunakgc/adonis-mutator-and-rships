'use strict'

/*
|--------------------------------------------------------------------------
| CarSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Car = use('App/Models/Car');

class CarSeeder {
  async run () {
    const cars = [
      {car_name: 'BMW', owner_id: 1},
      {car_name: 'AUDI', owner_id: 2},
      {car_name: 'FORD', owner_id: 3},
      {car_name: 'FIAT', owner_id: 4},
    ];
    await Car.createMany(cars);
  }
}

module.exports = CarSeeder
