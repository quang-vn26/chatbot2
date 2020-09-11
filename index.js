"use strict";
 
const express = require("express");
const bodyParser = require("body-parser");
const restService = express();
 
restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());

restService.post("/chatbot", function (req, res) {
   if (req.body.queryResult.parameters.acc_information == "contact number"
    && req.body.queryResult.parameters.acc_information) {
    var speech = "999999999";
  }
  else if (req.body.queryResult.parameters.acc_information == "account number"
    && req.body.queryResult.parameters.acc_information) {
    var speech = "9999999999999";
  }
  else if (req.body.queryResult.parameters.acc_information == "DOB"
    && req.body.queryResult.parameters.acc_information) {
    var speech = "1 Jan 2019";
  }
  else if (req.body.queryResult.parameters.acc_information == "address"
    && req.body.queryResult.parameters.acc_information) {
    var speech = " floor no 1 , Building no 1 , address";
  }
 
  return res.json({
    fulfillmentText: "fulfillmentText",
    fulfillmentMessages: [{
      simpleResponses: {
        simpleResponses: [{
          "textToSpeech": "textToSpeech",
          "displayText": speech
        }]
      }
    }],
    source: "webhook-sample"
  });
});
// const express = require('express')
// // will use this later to send requests
// const http = require('http')
// // import env variables
// require('dotenv').config()

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
// 	res.status(200).send('Server is working.')
// })

// app.post('/getmovie', (req, res) => {
// 	const movieToSearch =
// 		req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.movie
// 			? req.body.result.parameters.movie
// 			: ''

// 	const reqUrl = encodeURI(
// 		`http://www.omdbapi.com/?t=${movieToSearch}&apikey=${process.env.API_KEY}`
// 	)
// 	http.get(
// 		reqUrl,
// 		responseFromAPI => {
// 			let completeResponse = ''
// 			responseFromAPI.on('data', chunk => {
// 				completeResponse += chunk
// 			})
// 			responseFromAPI.on('end', () => {
// 				const movie = JSON.parse(completeResponse)

// 				let dataToSend = movieToSearch
// 				dataToSend = `${movie.Title} was released in the year ${movie.Year}. It is directed by ${
// 					movie.Director
// 				} and stars ${movie.Actors}.\n Here some glimpse of the plot: ${movie.Plot}.
//                 }`

// 				return res.json({
// 					fulfillmentText: dataToSend,
// 					source: 'getmovie'
// 				})
// 			})
// 		},
// 		error => {
// 			return res.json({
// 				fulfillmentText: 'Could not get results at this time',
// 				source: 'getmovie'
// 			})
// 		}
// 	)
// })

// app.listen(port, () => {
// 	console.log(`🌏 Server is running at http://localhost:${port}`)
// })