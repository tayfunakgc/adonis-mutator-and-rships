'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarOwnerSchema extends Schema {
  up () {
    this.create('car_owners', (table) => {
      //table.increments()
      table.integer('owner_id');
      table.integer('car_id');
      //table.timestamps()
    })
  }

  down () {
    this.drop('car_owners')
  }
}

module.exports = CarOwnerSchema
