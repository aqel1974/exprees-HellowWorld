const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hellow World 1234');
});

app.listen(process.env.PORT || 3000);
