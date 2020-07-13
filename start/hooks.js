const { ioc } = require('@adonisjs/fold')


ioc.bind('DeviceSerializer', () => {
    return require('../app/Serializers/DeviceSerializer')
})