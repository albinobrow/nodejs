const express = require('express');
const app = express();
const path = require('path');
const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



// 



// Respond 404 error to other requests
app.use((req, res) => {
  res.sendStatus(404);
});
