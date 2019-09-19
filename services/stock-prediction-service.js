let DecisionTree = require('decision-tree');

module.exports = {
  predict: function (stockData, trainingData) {
    console.log(stockData);

    let dt = new DecisionTree(trainingData, class_name, features);
    let prediction = dt.predict({
           
    });
    
    return prediction;
  }
};