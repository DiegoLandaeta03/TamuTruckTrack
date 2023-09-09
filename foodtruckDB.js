function saveFoodTruck(name, location, menu) {
    const truck = {
      name: name,
      location: location,
      menu: menu,
    };
  
    // Convert the food truck object to a JSON string
    const truckJSON = JSON.stringify(truck);
  
    // Store the JSON string in local storage with a unique key
    localStorage.setItem(name, truckJSON);
  }
  
  // Function to retrieve a food truck from the database
  function getFoodTruck(name) {
    // Get the JSON string from local storage using the truck's name as the key
    const truckJSON = localStorage.getItem(name);
  
    if (truckJSON) {
      // Parse the JSON string back into a JavaScript object
      const truck = JSON.parse(truckJSON);
      return truck;
    } else {
      return null; // Food truck not found
    }
  }
  
  // Example usage:
  saveFoodTruck("Tasty Tacos", "123 Main St", ["Taco", "Burrito"]);
  const retrievedTruck = getFoodTruck("Tasty Tacos");
  
  if (retrievedTruck) {
    console.log("Found Food Truck:", retrievedTruck);
  } else {
    console.log("Food Truck not found");
  }
  
