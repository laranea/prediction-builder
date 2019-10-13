const DecisionTree = require('decision-tree');
const mongoClient = require('./mongo-client');
const sentimentService = require('./sentiment-service');

module.exports = {
  train: function () {
    // hard coded "dummy" training data for now...
    // TODO: fill this array with real past data examples
    return trainingData = [
      { positiveSentimentForPastDay: true, positiveSentimentForPast10Days: true, increased_in_value: true },
      { positiveSentimentForPastDay: true, positiveSentimentForPast10Days: true, increased_in_value: true } 
    ];
  },

  predict: function (stockData) {
    return new Promise((resolve, reject) => {
      trainingData = this.train();
      features = [
        "positiveSentimentForPast10Days",
        "positiveSentimentForPastDay"
      ];
      let dt = new DecisionTree(trainingData, "increased_in_value", features);
  
      let tenDaysPromise = new Promise((resolve, reject) => {
        mongoClient.getTweetsForPastNumOfDays(10).then((tweetsData) => {
          resolve(sentimentService.isPositive(tweetsData));
        });
      });

      let oneDayPromise = new Promise((resolve, reject) => {
        mongoClient.getTweetsForPastNumOfDays(1).then((tweetsData) => {
          resolve(sentimentService.isPositive(tweetsData));
        });
      });

      Promise.all([tenDaysPromise, oneDayPromise]).then((data) => {
        let prediction = dt.predict({
          positiveSentimentForPast10Days: data[0],
          positiveSetimentForPastDay: data[1]     
        });
        resolve(prediction);
      });
    });
  }
};