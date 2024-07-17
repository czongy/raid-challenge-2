import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import NavigationBar from './components/NavigationBar';
import Cart from './components/Cart';
import { router } from './router';
import { UserProvider } from './context/UserContext';

function App() {
  const [show, setShow] = useState(false);
  
  function handleShow() {setShow(true);};
  function handleClose() {setShow(false);};

  return (
    <UserProvider>
      <CartProvider>
        <NavigationBar handleShow={handleShow}></NavigationBar>
        <Cart show={show} handleClose={handleClose}></Cart>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  );
};

export default App;

