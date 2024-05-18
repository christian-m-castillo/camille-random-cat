document.addEventListener('DOMContentLoaded', function() {
  const catPhoto = document.getElementById('catPhoto');
  const newCatBtn = document.getElementById('newCatBtn');

  // Function to fetch a new cat photo from the API
  function fetchCatPhoto() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      const catImageUrl = data[0].url;
      displayCatPhoto(catImageUrl);
    })
    .catch(error => console.log('Error fetching cat photo:', error));
  }
  // Function to display the cat photo on the page
    function displayCatPhoto(url) {
      catPhoto.innerHTML = `<img src="${url}" alt="Cat Photo" />`
    }

  // Event Listener for the "New Cat Photo" button
      newCatBtn.addEventListener('click', fetchCatPhoto);
    
  // Fetch a cat photo when the page loads
      fetchCatPhoto();
})