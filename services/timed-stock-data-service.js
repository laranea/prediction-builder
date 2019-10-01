module.exports = function (stockDataService) {
  const timedDataService = {
    startDataPoll: function (tickerSymbol) {
      // poll the api every five minutes to get the latest stock data
      const FIVE_MINUTES = 300000;
      
      setTimeout(function () {
        stockDataService.getDataFor(tickerSymbol).then((responseData) => {
          // write the response data to the mongo database
          
        });
      }, FIVE_MINUTES);
    }
  }; 
  return timedDataService;
};