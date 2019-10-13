module.exports = function (app, predictionService, stockDataService, CircularJSON) {
  app.get('/api/prediction/:ticker', (req, res) => {
    let ticker = req.params.ticker;
    stockDataService.getDataFor(ticker).then((stockData) => {
      predictionService.predict(stockData).then((advice) => {
        res.header("Access-Control-Allow-Origin", "*");
        let adviceJSON = CircularJSON.stringify(advice);
        res.send(adviceJSON);    
      });
    });
  });

  return app;
};