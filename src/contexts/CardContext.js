import { createContext, useState } from "react";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
    // verilen itemi sepete ekleyin
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
export const CartContext = createContext();
export default CartContextProvider;
