const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const port = process.env.PORT || 3000;

// Create a JSON database using Lowdb
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set up a default structure for the database (if it doesn't exist)
db.defaults({ items: [] }).write();

// Define a route to add an item to the database
app.post('/addItem', (req, res) => {
  const newItem = {
    name: 'Example Item',
    description: 'This is an example item.',
  };

  // Add the new item to the 'items' collection in the database
  db.get('items')
    .push(newItem)
    .write();

  res.send('Item added to the database.');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
