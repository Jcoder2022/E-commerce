import React, { useState } from 'react'
import all_product from "../Components/Assets/all_product"

export const ShopContext = React.createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
} 


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    
    const addToCart =(ItemId) => {
        setCartItems((prev)=> ({...prev, [ItemId]:prev[ItemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart =(ItemId) => {
        setCartItems((prev)=> ({...prev, [ItemId]:prev[ItemId]-1}));
    }
    
    const getCartTotalPrice = () => {
        let totalPrice = 0;
        for (const item in cartItems) {
          if(cartItems[item]>0)
          {
              let product = all_product.find((product)=>(product.id===Number(item)));   
              totalPrice = totalPrice+ product.new_price * cartItems[item];    
          }
        }
        return totalPrice;
    }

    const getTotalNumberOfItems = () =>{
        let numberOfItems = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                numberOfItems = numberOfItems + cartItems[item];
            }
        }
        return numberOfItems;
    }



    const contextValue = {all_product,cartItems, addToCart, removeFromCart,getCartTotalPrice,
        getTotalNumberOfItems};

    
    
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider