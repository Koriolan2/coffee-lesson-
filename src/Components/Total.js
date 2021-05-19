import React from 'react';
import { formatPrice } from './formatPrice';

export const Total = ({cartElements}) => {
    
    let c = cartElements.reduce((result, element)=>{
        const s = element.sum;
        result = result + element.sum;
        return result;
    }, 0);

    return (
        <div className = "total">
            <div className="total__item">Всего: </div>
            <div className="total__item">{formatPrice(c)}</div>
        </div>
    )
}