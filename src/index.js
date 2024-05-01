require('dotenv/config');

const express = require('express');
const app = express();
const cors = require('cors');

require('./models').syncdatabase();

const { appRouter } = require('./routes');

app.use(cors());
app.use(appRouter);

app.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
