import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => setMeals(data.meals));
      
  }, []);
  
  const handleAddToCart = (meal) => {
    console.log(meal);
  }

  
  return (
    <div>
      <Header></Header>  
      <div className='main-container'>
        <div className='meals-container'>
          {
            meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleAddToCart={handleAddToCart}></Meal>)
          }
        
        </div>
        <div className='order-container'>
        <div className='order-info'>
          <h3>Order Info</h3>
          
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
