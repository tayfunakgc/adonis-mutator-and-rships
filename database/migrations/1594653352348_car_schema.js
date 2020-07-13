'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments();
      table.string('car_name', 80);
      table.integer('owner_id');
      table.timestamps();
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
