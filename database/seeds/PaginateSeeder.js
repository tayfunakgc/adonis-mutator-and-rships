'use strict'

/*
|--------------------------------------------------------------------------
| PaginateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Paginate = use('App/Models/Paginate');
class PaginateSeeder {
  async run () {
    const paginate_data = [];
    for(let i=0; i<100; i++) {
      paginate_data.push({text_data: "Its a text_data index " + i});
    }
    await Paginate.createMany(paginate_data);
  }
}

module.exports = PaginateSeeder
