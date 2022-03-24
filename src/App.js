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

  
  return (
    <div>
      <Header></Header>  
      {
        meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
      }
      

    </div>
  );
}

export default App;
