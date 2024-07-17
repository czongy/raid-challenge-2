import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('Cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartCounter, setCartCounter] = useState(() => {
    const savedCounter = localStorage.getItem('Counter');
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });
  const [totalCost, setTotalCost] = useState(() => {
    const savedTotal = localStorage.getItem('Total');
    return savedTotal ? JSON.parse(savedTotal) : 0;
  });

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cart));
    localStorage.setItem('Counter', JSON.stringify(cartCounter));
    localStorage.setItem('Total', JSON.stringify(totalCost));
  }, [cart, cartCounter, totalCost]);

  // useEffect(() => {
  //   localStorage.setItem('Cart', []);
  //   localStorage.setItem('Counter', 0);
  // }, [cart, cartCounter]);

  function addFruit(fruit) {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        (item) => item.fruit_id === fruit.fruit_id
      );
      if (existingItem) {
        return prevCart.map(item =>
          item.fruit_id === fruit.fruit_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...fruit, quantity: 1 }];
      }
    });
    setCartCounter(prevCartCounter => prevCartCounter + 1);
    setTotalCost(prevTotalCost => prevTotalCost + fruit.price);
  };

  function removeFruit(fruit) {
    setCart(prevCart => {
      const fruitIndex = prevCart.findIndex(
        (item) => item.fruit_id === fruit.fruit_id
      );
      if (fruitIndex !== -1) {
        const updatedCart = [...prevCart];
        const updatedItem= updatedCart[fruitIndex];
        if (updatedItem.quantity > 1) {
          updatedCart[fruitIndex] = {
            ...updatedItem,
            quantity: updatedItem.quantity - 1,
          };
        } else {
          updatedCart.splice(fruitIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });
    setCartCounter(prevCartCounter => prevCartCounter - 1);
    setTotalCost(prevTotalCost => prevTotalCost - fruit.price);
  };

  function handleSubmit() {
    const data = {
      cart: cart,
      total_price: totalCost,
    }

    fetch('http://localhost:8000/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ order: data })
    })
    .then (response => {
      if (!response.ok) {
        throw new Error ('Request Failed with status ' + response.status);
      } else {
        setCart([]);
        setCartCounter(0);
        setTotalCost(0);
      }
      return response.json()
    })
    .then(json => console.log(json.message))
    .catch(err => console.log('Fetch error', err));
  };

  return (
    <CartContext.Provider value={{ cart, cartCounter, totalCost, addFruit, removeFruit, handleSubmit }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
