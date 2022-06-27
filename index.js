const express = require('express');
require('dotenv').config();

const todoRoutes = require('./routes/todo');

const app = express();
const port = process.env.PORT || 8000;

app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
