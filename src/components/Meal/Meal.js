import React from 'react';

const Meal = (props) => {
    const {strMeal, strCategory, strArea, strMealThumb} = props.meal;
    console.log(props.meal)
    return (
        <div>
            <img src={strMealThumb} alt='' />
            <h1>Name: {strMeal}</h1>
        </div>
    );
};

export default Meal;