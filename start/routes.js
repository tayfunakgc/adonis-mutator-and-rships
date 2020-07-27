'use strict'

const { remove } = require('@adonisjs/framework/src/Route/Store');

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

Route.get('/cars-with-owner', async ({response}) => {
    const cars = await Car.query().with('owner').fetch();
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

const PaginateModel = use('App/Models/Paginate');
Route.get('/paginates', async ({request, response}) => {
    //* For selecting all data without paginate
    /*
    const paginate_data = await Paginate.all();
    console.log(paginate_data.toJSON().length);
    response.send(paginate_data);
    */
    //* With paginating
    const page = request.input('page');
    console.log('PAGE = ', page);
    //response.send('yeaa')
    const paginate_data = await PaginateModel.query().paginate(page, 10);
    response.send(paginate_data);
});

Route.get('custom-login', async ({auth, response}) => {
    const token = await auth.authenticator('custom_jwt')
        .generate({id:1, custom_username: 'username1', custom_password: 'password1'}, {custom_username: 'username1'});
    response.send(token);
})//.middleware(['auth:custom_jwt'])

Route.get('get-user', async ({auth, response}) => {
    const user = await auth.getUser();
    response.send(user);
}).middleware('auth:custom_jwt');

Route.get('owners-car', async ({response}) => {
    const owners = await Owner.query().with('many_cars').fetch();
    response.send(owners);
});

Route.get('cars-owner', async ({response}) => {
    const cars = await Car.query().with('many_users').fetch();
    response.send(cars);
})
const OwnerCar = use('App/Models/OwnerCar');
Route.get('del-owners-car', async ({response}) => {
    const removed = await OwnerCar.query().where('owner_id', 1).where('car_id', 1).delete();
    console.log(removed);
    response.send(removed);
});