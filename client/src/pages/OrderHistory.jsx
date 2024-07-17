import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';

function OrderHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/orderhistory')
    .then(response => {
      if (!response.ok) {
        throw new Error('Request Failed with status' + response.status);
      }
      return response.json();
    })
    .then(json => {
      setHistory(json.history);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
  }, []);

  return (
    <Container className='mt-2'>
      <h1 className='text-primary pb-4 fw-bold'>Order History</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Total Amount</th>
            <th>Date of Order</th>
            <th>Transaction Number</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.order_id}</td>
              <td>${item.total_price}</td>
              <td>{new Date(item.order_date).toLocaleString()}</td>
              <td>{item.transaction_id}</td>
              <td>{new Date(item.transaction_date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderHistory;