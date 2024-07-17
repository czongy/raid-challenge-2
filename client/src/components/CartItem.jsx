import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/CartItem.css';

function CartItem({item}) {
  const { addFruit, removeFruit } = useContext(CartContext)

  return (
    <Row className="px-1 pb-3">
      <Col xs={2}><Image src={item.img_url} className="image-custom" roundedCircle /></Col>
      <Col xs={4}><p className="fs-6">{item.fruit_name}</p></Col>
      <Col xs={3}><p className="fs-6">${item.price.toFixed(2)}</p></Col>
      <Col xs={1}><button onClick={() => removeFruit(item)}>-</button></Col>
      <Col xs={1}>{item.quantity}</Col>
      <Col xs={1}><button onClick={() => addFruit(item)}>+</button></Col>
    </Row>
  );
};

export default CartItem;