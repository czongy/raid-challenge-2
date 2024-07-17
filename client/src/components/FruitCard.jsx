import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { CartContext } from "../context/CartContext";
import "../styles/FruitCard.css";

function FruitCard({fruit, index}) {
  const { addFruit } = useContext(CartContext);

  function handleAddFruit(fruit) {
    addFruit(fruit);
  };

  return (
    <Col key={index}>
      <Card onClick={() => handleAddFruit(fruit)} className="btn-custom test">
        <Card.Img src={fruit.img_url} className="img-custom" alt={fruit.fruit_name} />
        <Card.Body className="text-secondary">
          <Card.Title className="hover-primary fw-bold fs-6">
            {fruit.fruit_name.toUpperCase()}
          </Card.Title>
          <Card.Text>
            Price
            <span className="fw-bold">
              ${fruit.price.toFixed(2)}
            </span>
          </Card.Text>
          <Card.Text>
            Stock
            <span>{fruit.stock}</span>
          </Card.Text>
          {/* <Card.Text>
            In cart
            <span className="text-danger">{}</span>
          </Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FruitCard;