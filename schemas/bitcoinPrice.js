import {thinky} from 'standardstream'

var type = thinky.type

var BitcoinPrice = thinky.createModel('bitcoin_prices', {
  bitstamp: String,
  btce: String,
  bitfinex: String,
  date: {
    created: Date,
    modified: Date
  },
  huobi: String,
  ltc: String,
  status: type.string().enum(['A', 'D'])
})

export default BitcoinPrice
