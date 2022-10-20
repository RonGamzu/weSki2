const express = require('express');
const bodyParser = require('body-parser');
const hotelsRoutes = require('./routes/hotels-routes');
const HttpError = require('./models/http-error');
var cors = require("cors");


const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());

app.use('/api/hotels', hotelsRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.listen(5000);