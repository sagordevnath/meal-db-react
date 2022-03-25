import React from 'react';
import './Cart.css';

const Cart = ({item}) => {   
    
    const {strMeal, strCategory, strArea, strMealThumb} = item;
    return (        
        <div className='cart-item'>
            <img src={item.strMealThumb} alt='' />
            <div>
                <h4>Name: {item.strMeal}</h4>
                <p>Category: {item.strCategory}</p>
                <p>Area:  {item.strArea}</p>
            </div>
        </div>
                 );
            
        
};
   


export default Cart;