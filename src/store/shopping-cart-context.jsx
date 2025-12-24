import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (id) => {},
  updateItemQuantity: (productId, amount) => {},
});
