import express from 'express'
// import cors from 'cors'
// import axios from 'axios'
import { Low } from 'lowdb'
import { LowSync } from 'lowdb'
import { JSONFileSync } from "lowdb/node"

// const express = require("express");
// const low = require("fix-esm").require("lowdb");
// const FileSync = require("lowdb/adapters/JSONFileSync");

const app = express();
app.listen(3001,function () {
    console.log("listening on 3001")
});

// const adapter = new JSONFile(file)
const defaultData = {
    foodTrucks: [
        {   
            name: "Bad Chix",
            location: "Zcach",
            openTime: "6AM",
            closeTime: "10PM",
            menu: "menu",
            website: "site"
        }
    ]
};

// app.get("/Trucks", (req, res) => {
//   res.send(defaultData.foodTrucks);  
// });

// Function to add a new food truck to the database
function addFoodTruck(newFoodTruck) {
    db.get('foodTrucks')
      .push(newFoodTruck)
      .write();
  }
  
  // Example usage:
  const newFoodTruck = {
    name: 'Tasty Tacos',
    location: '123 Main St',
    openTime: '10:00 AM',
    closeTime: '8:00 PM',
    menu: ['Tacos', 'Burritos', 'Quesadillas'],
    website: 'https://www.tastytacos.com',
  };
  
  // Call the function to add a new food truck
  addFoodTruck(newFoodTruck);
  