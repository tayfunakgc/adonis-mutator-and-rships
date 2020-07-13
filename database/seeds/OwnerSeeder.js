'use strict'

/*
|--------------------------------------------------------------------------
| OwnerSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Owner = use('App/Models/Owner');

class OwnerSeeder {
  async run () {
    const owners = [
      {username: 'Owner 1'},
      {username: 'Owner 2'},
      {username: 'Owner 3'},
      {username: 'Owner 4'}
    ]
    await Owner.createMany(owners); 
  }
}

module.exports = OwnerSeeder
