localStorage.removeItem('debug');
// Function to retrieve all food trucks from Local Storage
function getAllFoodTrucks() {
    const foodTrucks = [];

    // Iterate through Local Storage and add food trucks to the array
    for (let i = 0; i < localStorage.length; i++) {
        const truckName = localStorage.key(i);
        const truckJSON = localStorage.getItem(truckName);

        if (truckJSON) {
            const truck = JSON.parse(truckJSON);
            foodTrucks.push(truck);
        }
    }

    // Sort food trucks by location (you can use a custom sorting function)
    foodTrucks.sort((a, b) => a.location.localeCompare(b.location));

    return foodTrucks;
}

// Function to display the sorted list of food trucks
function displayFoodTruckList() {
    const foodTruckList = document.getElementById("foodTruckList");

    // Check if the list element exists
    if (!foodTruckList) {
        console.error("Element with id 'foodTruckList' not found.");
        return;
    }

    const foodTrucks = getAllFoodTrucks();

    // Clear the list
    foodTruckList.innerHTML = "";

    // Check if there are food trucks to display
    if (foodTrucks.length === 0) {
        const noDataMessage = document.createElement("p");
        noDataMessage.textContent = "No food trucks available.";
        foodTruckList.appendChild(noDataMessage);
        return;
    }

    // Create list items for each food truck and append them to the list
    foodTrucks.forEach((truck) => {
        const listItem = document.createElement("li");
        
        // Use a template literal for improved readability
        listItem.innerHTML = `
            <head><link rel="stylesheet" type="text/css" href="listStyling.css"></head>
            <body>
                <h2>${truck.name}</h2>
                <p>Location: ${truck.location}</p>
                <p class="other">Hours: ${truck.openTime} - ${truck.closeTime}</p>
                <p class="other"><a href="${truck.menu}" target="_blank">View Menu</a></p>
                <p class="other"><a href="https://${truck.website}" target="_blank">${truck.name}'s Website</a></p>
            </body>
        `;

        foodTruckList.appendChild(listItem);
    });
}


// Call the displayFoodTruckList function to display the sorted food truck list on page load
displayFoodTruckList();
