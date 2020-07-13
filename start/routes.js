'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

const Owner = use('App/Models/Owner');
const Car = use('App/Models/Car');
const Test = use('App/Models/Test');

Route.get('/owners', async ({response}) => {
    const owners = await Owner.query().with('cars').fetch();
    response.send(owners);
});

Route.get('/cars', async ({response}) => {
    const cars = await Car.all();
    response.send(cars);
});

Route.get('/tests', async ({response}) => {
    const tests = await Test.all();
    response.send(tests);
});

Route.get('/json', async ({response}) => {
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
    const configs = [
        {id: 1, config: config},
        {id: 2, config: config}
    ]
    response.send(configs);
});