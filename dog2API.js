document.addEventListener('DOMContentLoaded', function() {
    const dogBtn = document.getElementById('dogBtn');
    const dogDisplay = document.getElementById('dogDisplay');

    dogBtn.addEventListener('click', function() {
        // Fetching a random dog image from the Dog CEO API
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                // Displaying the dog image on the webpage
                dogDisplay.innerHTML = `<img src="${data.message}" alt="Random Dog" style="max-width: 400px;">`;
            })
            .catch(error => {
                // Handling errors
                dogDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching dog image:', error);
            });
    });
});
