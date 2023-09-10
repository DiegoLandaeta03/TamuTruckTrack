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

// const adapter = new JSONFile(file)
let defaultData = {
    foodTrucks: [
        {   
            name: "Bad Chix",
            location: "Zach",
            openTime: "6AM",
            closeTime: "10PM",
            menu: "menu",
            website: "site"
        }
    ]
};

app.get("/Trucks", (req, res) => {
   res.send(defaultData.foodTrucks);  
 });

// Function to write a new food truck to the database
function addFoodTruck(newFoodTruck) {
    // Push the new food truck to the 'foodTrucks' array in the database
    defaultData.foodTrucks.push(newFoodTruck);
}

// Function to read all food trucks from the database
// function getAllFoodTrucks() {
//     // Retrieve and return all food trucks from the 'foodTrucks' array in the database
//     return app.get('foodTrucks').value();
// }

// Example usage:
// Add a new food truck
let newFoodTruck = {
    name: 'Good Burgers',
    location: 'Downtown',
    openTime: '10AM',
    closeTime: '8PM',
    menu: 'Burgers, Fries, Shakes',
    website: 'https://www.goodburgers.com',
};

 addFoodTruck(newFoodTruck);

// // Read all food trucks
// const allFoodTrucks = getAllFoodTrucks();
// console.log(allFoodTrucks);
