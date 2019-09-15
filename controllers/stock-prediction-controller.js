module.exports = function (app, predictionService) {
  app.get('/api/prediction', (req, res) => {
    predictionService.predict();
    res.send();
  });
};