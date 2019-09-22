module.exports = function (app, predictionService, stockDataService) {
  app.get('/api/prediction/:ticker', (req, res) => {
    let ticker = req.params.ticker;
    stockDataService.getDataFor(ticker).then((stockData) => {
      predictionService.predict(stockData).then((advice) => {
        res.send(advice);    
      });
    });
  });

  return app;
};