module.exports = function (axios) {
  const stockSymbolService = {
    getSymbols: function () {
      return axios.get('https://api.iextrading.com/1.0/ref-data/symbols');
    }
  }

  return stockSymbolService;
};