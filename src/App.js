import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Meal from './components/Meal/Meal';

function App() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => setMeals(data.meals));
      
  }, []);
  
  const handleAddToCart = (meal) => {
    const newCart = [...cart, meal];
    setCart(newCart);
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
          {
            cart.map(item => {
              return <Cart key={item.idMeal} item={item}></Cart>
            }
            )}
          
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
