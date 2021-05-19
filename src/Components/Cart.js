import React from 'react';
import { CartElement } from './CartElement';

export const Cart = ({cartElements, setCartElements}) =>{
    console.log(cartElements);
    
    const deleteItem = index => {
        const newOrder = [...cartElements];

        newOrder.splice(index, 1);

        setCartElements(newOrder);

    }

    return(
        <div className="cart">
            <h2>Заказ</h2>
            { cartElements.map((elem, index) => (<CartElement 
                        key = {index} 
                        {...elem}
                        deleteItem = {deleteItem}
                        index = {index} />)) }
        </div>
    );
}