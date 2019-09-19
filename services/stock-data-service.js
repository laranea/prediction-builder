module.exports = function (axios) {  
  const stockDataService = {
    getDataFor: function (tickerSymbol) {
      let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${tickerSymbol}&interval=5min&outputsize=full&apikey=${apiKey}`;
      return axios.get(url);
    }
  }
  
  return stockDataService;
};