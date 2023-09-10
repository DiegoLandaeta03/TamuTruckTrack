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
    const foodTrucks = getAllFoodTrucks();

    // Clear the list
    foodTruckList.innerHTML = "";

    // Create list items for each food truck and append them to the list
    foodTrucks.forEach((truck) => {
        const listItem = document.createElement("ul");
        listItem.textContent = `${truck.name} - Location: ${truck.location}`;
        foodTruckList.appendChild(listItem);
    });
}

// Call the displayFoodTruckList function to display the sorted food truck list on page load
displayFoodTruckList();
