import React from 'react';
import { formatPrice } from './formatPrice';

export const CartElement = ({id, title, price, count, sum, index, deleteItem}) => {
    

    return (
    <>
        <div className="cart__element">
            <div className="cart__del" onClick = {() => deleteItem(index)}>&times;</div>
            <div className="cart__title">{title}</div>
            <div className="cart__count">
                <div className="cart__minus">-</div>
                <div className="cart__centr">{count}</div>
                <div className="cart__plus">+</div>
            </div>
            <div className="cart__price">{formatPrice(price)}</div>
            <div className="cart__summ">{formatPrice(sum)}</div>
        </div>
    </>
    );
}
    