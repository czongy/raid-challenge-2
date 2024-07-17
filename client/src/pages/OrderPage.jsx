import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/orderlist')
    .then(response => {
      if (!response.ok) {
        throw new Error('Request Failed with status' + response.status);
      }
      return response.json();
    })
    .then(json => {
      console.log(json.orders);
      setOrders(json.orders);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  }, []);

  return (
    <Container className='mt-2'>
      <h1 className='text-primary pb-4 fw-bold'>Orders</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date of Order</th>
            <th>Item Number</th>
            <th>Fruit Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={index}>
              <td>{item.order_id}</td>
              <td>{new Date(item.order_date).toLocaleString()}</td>
              <td>{item.order_item_id}</td>
              <td>{item.fruit_name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderPage;