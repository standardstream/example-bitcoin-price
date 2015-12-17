import BitcoinPrice, {table} from '../schemas/bitcoinPrice'

class BitcoinPriceModel {

  constructor(body = {}) {

    this.pkg   = body.price
    this.table = table

  }

  get(id, cb) {

    BitcoinPrice.get(id).run().then(function(data) {

      cb(null, data)

    })

  }

  getAll(cb) {

    BitcoinPrice.run().then(function(data) {

      cb(null, data)

    })

  }

  save(cb) {

    BitcoinPrice.save(this.pkg).then(function(data) {

      cb(null, data)

    })

  }

}

export default BitcoinPriceModel
