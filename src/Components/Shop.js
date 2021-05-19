import React from 'react';
import { DBShops } from './DBShops';
import { ShopElement } from './ShopElement';

export const Shop = ({toCart}) => {
   
    return (
        <div className="shop">
            <h2>Меню</h2>
            {
                DBShops.map(elem => (
                    <ShopElement 
                        key = {elem.id} 
                        item = {elem} 
                        {...toCart}
                    />
                    )
                )
            }            
        </div>
    )    
}