'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OwnerSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.increments();
      table.string('username', 80);
      table.timestamps();
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnerSchema
