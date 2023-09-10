function saveFoodTruck(name, location, openTime, closeTime, menu, website) {
    const truck = {
      name: name,
      location: location,
      openTime: openTime,
      closeTime: closeTime,
      menu: menu,
      website: website,
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