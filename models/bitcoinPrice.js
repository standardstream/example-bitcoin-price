import BitcoinPrice from '../schemas/bitcoinPrice'

class BitcoinPriceModel {

  constructor(body) {

    this.pkg = body.price

    this.save()

  }

  save() {

    BitcoinPrice.save(this.pkg)

  }

}

export default BitcoinPriceModel
