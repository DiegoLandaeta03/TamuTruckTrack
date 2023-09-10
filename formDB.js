
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get form field values
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const openTime = document.getElementById("openTime").value;
    const closeTime = document.getElementById("closeTime").value;
    const menu = document.getElementById("menu").value;
    const website = document.getElementById("website").value;

    // Check if the name field is not empty
    if (name.trim() !== "") {
        // Create a food truck object
        const foodTruck = {
            name: name,
            location: location,
            openTime: openTime,
            closeTime: closeTime,
            menu: menu,
            website: website
        };

        console.log(document.getElementById("name").value)
        console.log(document.getElementById("location").value)
        console.log(document.getElementById("openTime").value)
        console.log(document.getElementById("closeTime").value)
        console.log(document.getElementById("menu").value)
        console.log(document.getElementById("website").value)

        // Convert the food truck object to a JSON string
        const foodTruckJSON = JSON.stringify(foodTruck);

        // Store the JSON string in Local Storage
        localStorage.setItem(name, foodTruckJSON);
        

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("location").value = "";
        document.getElementById("openTime").value = "";
        document.getElementById("closeTime").value = "";
        document.getElementById("menu").value = "";
        document.getElementById("website").value = "";

        alert("Food truck data saved successfully!");
        
    } else {
        alert("Please enter a valid name for the food truck.");
    }
}

// Add an event listener to the form
document.getElementById("foodTruckForm").addEventListener("submit", handleSubmit);
