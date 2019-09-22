var MongoClient = require('mongodb').MongoClient;
let moment = require('moment');
var url = "mongodb://localhost:27017/";

module.exports = {
  getTweetsForPastNumOfDays: async function (numOfDays) {
    // format date as string like Thu Jun 16 13:16:30 +0000 2016
    // TODO: use date string as part of the query
    let dateStr = moment().subtract(numOfDays, 'd').format('ddd MMM DD HH:mm:S +0000 YYYY');
    
    var myPromise = () => (
      new Promise((resolve, reject) => {
          
        //do something, fetch something....
        //you guessed it, mongo queries go here.
        db.collection('twitter_data').find().then(function(result){
          return updatedResult;
        }).then(function(result){
          //post processing, non related mongo code...
          //when you are ready, you can resolve the promise.
          resolve(result);
        });
      })
    );
    
    return myPromise; 
  }
};