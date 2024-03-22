const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('App is listening on port 3000');
});

// Static files.
app.use('/models', express.static('models'));