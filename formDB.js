// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get form field values
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const menu = document.getElementById("menu").value;

    // Check if the name field is not empty
    if (name.trim() !== "") {
        // Create a food truck object
        const truck = {
            name: name,
            location: location,
            menu: menu,
        };

        // Convert the food truck object to a JSON string
        const truckJSON = JSON.stringify(truck);

        // Store the JSON string in Local Storage
        localStorage.setItem(name, truckJSON);

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("location").value = "";
        document.getElementById("menu").value = "";

        alert("Food truck data saved successfully!");
    } else {
        alert("Please enter a valid name for the food truck.");
    }
}

// Add an event listener to the form
document.getElementById("foodTruckForm").addEventListener("submit", handleSubmit);
