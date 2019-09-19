module.exports = function (app, predictionService, stockDataService) {
  app.get('/api/prediction/:ticker', (req, res) => {
    let ticker = req.params.ticker;
    let stockData = stockDataService.getStock(ticker);
    res.send(predictionService.predict(stockData));
  });

  return app;
};