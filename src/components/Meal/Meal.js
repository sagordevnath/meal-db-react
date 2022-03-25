import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Meal = ({meal, handleAddToCart}) => {
    const {strMeal, strCategory, strArea, strMealThumb} = meal;   
    
    
    return (
        <div className='meal'>
            <img src={strMealThumb} alt='' />
            <h4>Name: {strMeal}</h4>
            <p>Category: {strCategory}</p>
            <p>Area:  {strArea}</p>
            <button className='btn' onClick={()=>handleAddToCart(meal)}>Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Meal;
