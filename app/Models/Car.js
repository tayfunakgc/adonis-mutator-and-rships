'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Car extends Model {

    owner () {
        return this.belongsTo('App/Models/Owner');
    }

    many_users () {
        return this
            .belongsToMany('App/Models/Owner')
            .pivotTable('car_owners');
    }

}

module.exports = Car
