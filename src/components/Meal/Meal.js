import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { f07a } from '@fortawesome/free-solid-svg-icons'

const Meal = ({meal, handleAddToCart}) => {
    const {strMeal, strCategory, strArea, strMealThumb} = meal;
    console.log(meal)
    
    
    return (
        <div className='meal'>
            <img src={strMealThumb} alt='' />
            <h4>Name: {strMeal}</h4>
            <p>Category: {strCategory}</p>
            <p>Area:  {strArea}</p>
            <button onClick={handleAddToCart()}>Add to cart <FontAwesomeIcon icon={f07a}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;
