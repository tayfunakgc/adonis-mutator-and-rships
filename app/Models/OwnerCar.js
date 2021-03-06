'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OwnerCar extends Model {
    static get table () {
        return 'car_owners';
    }
    static get createdAtColumn () {
        return null;
    }
    static get updatedAtColumn () {
        return null;
    }
}

module.exports = OwnerCar
