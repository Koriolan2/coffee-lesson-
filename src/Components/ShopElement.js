import React from 'react';
import { formatPrice } from './formatPrice';

export const ShopElement = ({item, cartElements, setCartElements}) => {
    item.count = 1;
    item.sum = item.count * item.price;

   

    const addToCart = () => {
        if(cartElements.find(itemNew => itemNew.id === item.id) === undefined){
            setCartElements(prevState => [...prevState, {...item, count: 1}]);
        }else{
            let newItems = [...cartElements];
            for (let itemNew of Object.values(newItems)) {
                if(itemNew.id === item.id){
                    itemNew.count = itemNew.count + 1;
                    itemNew.sum = itemNew.count * itemNew.price;
                }
               
            }
            setCartElements(newItems);
        }
       
    }
    

    return (
        <div key={item.id} className="shop__element">
              <div className="shop__title">{item.title}</div>
              <div className="shop__price">{formatPrice(item.price)}</div>
              <div className="shop__button"
                   onClick = {addToCart}
              >+</div>
        </div>
    );
}