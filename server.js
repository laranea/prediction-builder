require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const predictionService = require('./services/stock-prediction-service.js');
const stockDataService = require('./services/stock-data-service.js');
const PORT = process.env.PORT || 3001;
let app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
});

// start the data poll which gets stock data every five minutes
poll = require('./services/timed-stock-data-service.js')(axios);

// Define API routes here
app = require('./controllers/stock-prediction-controller.js')(app, predictionService, stockDataService);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});