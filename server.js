/*
//Imports
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

//Set up Express App for use
//Line 12-13 set up the CORS policy and the request body parser (don't worry about this, it scares me too)
const app = express()
const port = 3001
app.use(cors())
app.use(express.json());

// Use JSON file for storage
//Where I got this: https://github.com/typicode/lowdb
const file = './db.json' 
const adapter = new JSONFile(file)
const db = new Low(adapter)

//Reads db.json file
//If it does not exist, it is created, and an empty jokes array is inserted.
//If it does exist, do nothing. db.data will be ready for use.
//Where I got this: https://github.com/typicode/lowdb
await db.read()
db.data ||= { foodTrucks: [] } 
await db.write()


// SAVE JOKE POST REQUEST
// Front-end will make a POST request to the app at this endpoint
// When that happens, this code will run!
// We want this section to:
//   - Update the jokes array in our database
//   - Respond with a successful status code (200)

app.post('/register', async (req, res) => {
  console.log("POST endpoint hit!")

  let foodTruck = {
    name: req.body.name,
    location: req.body.location,
    openTime: req.body.openTime,
    closeTime: req.body.closeTime,
    menu: req.body.menu,
    website: req.body.website,
  };

  await db.read();
  const { foodTrucks } = db.data;
  foodTrucks.push(foodTruck);
  await db.write();
})

/*
JOKES GET REQUEST
Front-end will make a GET request to the app at this endpoint
When that happens, this code will run!
We want this section to:
  - Make a GET request to the Jokes API and retrieve a joke 
  - Respond with a successful status code (200)

// app.get('/', (req, res) => {
//   console.log("GET endpoint hit!")
//   axios({
//     method: 'get',
//     url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit',
//   })
//   .then(function (response) {
//     res.send(response.data)
//   });
// })

app.get("/", (req, res) => {
    res.send(data.foodTrucks);  
  });

app.get('/trucks', async (req, res) => {
  console.log("GET endpoint hit!")
  await db.read();
  const { foodTrucks } = db.data;
  res.send(foodTrucks);
})

//Start the app on the specified port. Any request to the app should be made to localhost:{port}
//This part is standard on almost every Express app!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

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
