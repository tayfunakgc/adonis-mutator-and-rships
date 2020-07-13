class DeviceSerializer {
    constructor (rows, pages = null, isOne = false) {
        console.log('DeviceSerializer constructor');
        this.rows = rows
        this.pages = pages
        this.isOne = isOne
    }
  
    first () {
        return this.rows[0]
    }
  
    last () {
        return this.rows[this.rows.length - 1]
    }
  
    size () {
        return this.isOne ? 1 : this.rows.length
    }
  
    toJSON () {
        console.log('in to JSON')
        //return JSON.parse(this);
        console.log(this);
        return {};
    }
  }
  
  module.exports = DeviceSerializer;