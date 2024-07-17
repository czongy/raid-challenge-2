import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import '../styles/Cart.css';

function Cart({show, handleClose}) {
  const { cart, totalCost, handleSubmit } = useContext(CartContext);

  return (
    <Offcanvas show={show} onHide={handleClose} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='text-center'>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        <Button variant='success' onClick={handleSubmit} className='button-custom'>
          <span>${totalCost.toFixed(2)}</span>
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  )
};

export default Cart;