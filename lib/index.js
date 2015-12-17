import DMS     from 'standardstream'
import request from 'request'

import BitcoinPrice from '../models/bitcoinPrice'

var dms = new DMS()

dms
  .streamToString(request.get('https://bitcoinwisdom.com'))
  .scrape(function($) {

    return {
      price: {
        bitstamp: $('#market_bitstampbtcusd').text(),
        btce: $('#market_btcebtcusd').text(),
        bitfinex: $('#market_bitfinexbtcusd').text(),
        huobi: $('#market_huobibtccny .eprice').text().replace('/', ''),
        ltc: $('#market_btceltcusd').text()
      }
    }

  })
  .save(BitcoinPrice)
