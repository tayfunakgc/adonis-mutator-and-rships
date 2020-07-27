'use strict'

/*
|--------------------------------------------------------------------------
| CustomJwtSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const CustomJwt = use('App/Models/CustomJwt');

class CustomJwtSeeder {
  async run () {
    const custom_users = [
      { custom_username: 'username1', custom_password: 'password1' },
      { custom_username: 'username2', custom_password: 'password2' },
    ]

    await CustomJwt.createMany(custom_users);
  }
}

module.exports = CustomJwtSeeder
