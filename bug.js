const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operations to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct handling of 404
  }
  res.send(userData); // Missing error handling for database errors
});

app.listen(3000, () => console.log('Server is running on port 3000'));