require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
//database config link
const connectDB = require('./config/db');

//express
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

//database connection
connectDB();

app.get('/', (req, res) => {
  res.json({ message: 'testing' });
});
//routes
const PersonRoute = require('./routes/main');

app.use('/api', PersonRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
