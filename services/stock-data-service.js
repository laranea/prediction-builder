const axios = require('axios');

module.exports = {  
  getDataFor: function (tickerSymbol) {
    const apiKey = '8VG6XCZKT2JJ75FE';
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickerSymbol}&interval=5min&outputsize=full&apikey=${apiKey}`;
    return axios.get(url);
  }
};