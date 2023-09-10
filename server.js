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