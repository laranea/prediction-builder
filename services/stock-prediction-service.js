const DecisionTree = require('decision-tree');
const mongoClient = require('./mongo-client');
const sentimentService = require('./sentiment-service');

module.exports = {
  train: function () {
    // hard coded "dummy" training data for now...
    // TODO: fill this array with real past data examples
    return trainingData = [
      { positiveSentimentForPast10Days: true, increased_in_value: false },
      { positiveSentimentForPast10Days: false, increased_in_value: false } 
    ];
  },

  predict: function (stockData) {
    trainingData = this.train();
    features = [
      "positiveSentimentForPast10Days"
    ];
    let dt = new DecisionTree(trainingData, "increased_in_value", features);
  
    return new Promise((resolve, reject) => {
      mongoClient.getTweetsForPastNumOfDays(10).then((tweetsData) => {
        let prediction = dt.predict({
          positiveSentimentForPast10Days: sentimentService.isPositive(tweetsData)     
        });

        resolve(prediction);
      });
    });
  }
};