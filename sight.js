
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get form field values
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    // Check if the name field is not empty
    if (name.trim() !== "") {
        // Create a food truck object
        const foodTruck = {
            name: name,
            location: location,
            openTime: "",
            closeTime: "",
            menu: "",
            website: ""
        };

        console.log(document.getElementById("name").value)
        console.log(document.getElementById("location").value)


        // Convert the food truck object to a JSON string
        const foodTruckJSON = JSON.stringify(foodTruck);

        // Store the JSON string in Local Storage
        localStorage.setItem(name, foodTruckJSON);
        

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("location").value = "";

        alert("Food truck data saved successfully!");
        
    } else {
        alert("Please enter a valid name for the food truck.");
    }
}

// Add an event listener to the form
document.getElementById("foodTruckForm").addEventListener("submit", handleSubmit);

// Function to populate the dropdown with food truck names
function populateDropdown() {
    const selectElement = document.getElementById("foodTruckSelect");

    // Clear any existing options
    selectElement.innerHTML = "";

    // Iterate through Local Storage and add food truck names as options
    for (let i = 0; i < localStorage.length; i++) {
        const truckName = localStorage.key(i);

        // Create an <option> element for each food truck
        const optionElement = document.createElement("option");
        optionElement.value = truckName;
        optionElement.textContent = truckName;

        // Add the option to the dropdown
        selectElement.appendChild(optionElement);
    }
}

// Call the populateDropdown function to populate the dropdown on page load
populateDropdown();

