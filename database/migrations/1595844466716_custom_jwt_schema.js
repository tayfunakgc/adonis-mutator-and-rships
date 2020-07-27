'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomJwtSchema extends Schema {
  up () {
    this.create('custom_jwts', (table) => {
      table.increments();
      table.string('custom_username', 80).unique();
      table.string('custom_password', 60);
      table.timestamps();
    })
  }

  down () {
    this.drop('custom_jwts')
  }
}

module.exports = CustomJwtSchema
