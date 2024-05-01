const express = require('express');
const app = express();

require ('./models').syncdatabase();

const { appRouter } = require('./routes');

app.use(appRouter);

app.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
