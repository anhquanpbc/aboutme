
// Fetch the JSON file
fetch('../configs/langs-and-tools.json')
    .then(response => response.json())
    .then(data => {
        // Get the div where you want to add the icons
        const div = document.getElementById('langs');

        // Loop through the array of objects
        data.forEach(item => {
            // Create a new img element
            const img = document.createElement('img');

            // Set the src attribute of the img element
            img.src = item.url;

            // Set the alt attribute of the img element
            img.alt = item.name;

            // Add the img element to the div
            div.appendChild(img);
        });
    })
    .catch(error => console.error('Error:', error));