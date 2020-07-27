'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaginateSchema extends Schema {
  up () {
    this.create('paginates', (table) => {
      table.increments();
      table.text('text_data');
      table.timestamps();
    })
  }

  down () {
    this.drop('paginates')
  }
}

module.exports = PaginateSchema
