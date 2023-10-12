import { createContext, useState } from "react";
import { productsArray, getProductData } from "../data/productsStore";

// createContext allow us to store the cartData ( example: Id and quantities of what item we have in our cart) it also allows us to store function that we can call anywhere in our entire application
//Ou Context ( cart, addToCart, removeCart)
// The Provider gives to our React app access to all things in our Context
// To initialize that Context we are creating an object in our createContext

// We don't define the function right inside of the Context all the Context is saying is that we can define a function to get our product quantity

// We create a function getProductQuantity were we can pass all of our Provider
// To give the application access to this Context we add export

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  //We are defining items so we can create a specific state to our Provider

  const [cartProducts, setCartProducts] = useState();

  // {id: 1; quantity: 2}
  //.find gives us access to the current element that we are looping over
  // Here we can see if the product.id is equal to the id that we passed into this function. It will find an actual object od data
  function getProductQuantity(id) {
    // Translation:  " if we find an id equal to our current id show us is quantity "
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;
    //Translation: " if we don't find an equal one so if it's equal to undefined ( no matching one )  return 0"
    if (quantity === undefined) {
      return 0;
    }
    return quantity; // If its equal we return the quantity
  }

  function addOneToCart(id) {
    // Initially we are going to ask for the quantity of certain product
    // We need to see if there is zero element or if there is on element
    // Logic: " is product is not in the cart " and the else statement is: " is product is in the cart
    const quantity = getProductQuantity(id);

    //If the quantity is equal 0 we know we have no object in the cart

    if (quantity === 0) {
      setCartProducts(
        // Product is not in cart
        // Se setCartProducts equal to an array of element and we and spreads them out as individual elements in the new array created with the spread operator.
        // Logic: "take all of the objects that are already in our cart and put them to the front of this array then on top of all the object that ar already in our cart we want to add another one which is going to have an Id of the Id we passed in here because that's the item we are adding to the cart and it's going to have an initial quantity of one."

        [
          ...cartProducts,
          {
            id: id,
            quantity: 1,
          },
        ]
      );
    } else {
      setCartProducts(cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)));
    }
  }
}
