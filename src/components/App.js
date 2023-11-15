// create your App component here

import React, { useState, useEffect } from 'react';

const App = () => {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // useEffect to fetch data from the Dog API
  useEffect(() => {
    // Fetch data from the Dog API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Set the dog image URL in state
        setDogImage(data.message);
        // Update loading status to false
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures that useEffect runs only once on component mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default App;
