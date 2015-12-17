import {thinky} from 'standardstream'

var type = thinky.type
let table = 'bitcoin_prices'

var BitcoinPrice = thinky.createModel(table, {
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

export {table}
export default BitcoinPrice
