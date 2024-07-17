import FruitList from '../components/FruitList';
import { useEffect, useState } from 'react';

function HomePage() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/fruits')
    .then(response => {
      if (!response.ok) {
        throw new Error('Request Failed with status' + response.status);
      }
      return response.json();
    })
    .then(json => {
      json.fruits.forEach(fruit => {
        fruit.price = parseFloat(fruit.price);
      });
      setFruits(json.fruits);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  }, []);
  
  return (
    <FruitList fruits={fruits}/>
  );
}

export default HomePage;
