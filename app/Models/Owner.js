'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Owner extends Model {

    cars () {
        return this.hasOne('App/Models/Car');
    }
}

module.exports = Owner
