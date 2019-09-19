require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const predictionService = require('./services/stock-prediction-service.js');
const axios = require('axios');
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
})

// Define API routes here
app = require('./controllers/stock-prediction-controller.js')(app, predictionService, axios);

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});