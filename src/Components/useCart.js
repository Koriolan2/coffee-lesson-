import {useState} from 'react';

export const useCart = () => {
    
    const [cartElements, setCartElements] = useState([]);
    
    return {cartElements, setCartElements}
}