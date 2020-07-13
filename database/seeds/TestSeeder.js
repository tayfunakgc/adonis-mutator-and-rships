'use strict'

/*
|--------------------------------------------------------------------------
| TestSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Test = use('App/Models/Test');

class TestSeeder {
  async run () {
    const config = {
      key1: 'val1',
      key2: 'val2',
      key3: 'val3',
      key4: 'val4',
      roles: {
        do1: true,
        do2: true,
        do3: false,
        do4: false,
        arr: [{x: 'x', y: 'y'}]
      }
    }
    const tests = [
      {config: JSON.stringify(config)},
      {config: JSON.stringify(config)},
      {config: JSON.stringify(config)},
      {config: JSON.stringify(config)},
    ]
    await Test.createMany(tests);
  }
}

module.exports = TestSeeder
