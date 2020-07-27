'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Owner extends Model {

    cars () {
        return this.hasOne('App/Models/Car');
    }

    many_cars () {
        return this
            .belongsToMany('App/Models/Car')
            .pivotTable('car_owners');
    }
}

module.exports = Owner
