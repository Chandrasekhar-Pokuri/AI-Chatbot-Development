const express = require('express');
const cors = require('cors');
const connection = require('./db'); // Import the connection

const app = express();
app.use(express.json());

app.use(cors());

app.get('/menu1', (req, res) => {
  const query = 'SELECT item_name,price FROM menu_table';  // Query the database
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error querying the database');
      return;
    }
    res.json(results); // Send the result as a response
  });
});



app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
