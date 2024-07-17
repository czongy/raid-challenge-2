import express from 'express';
import pg from 'pg';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.REACTURL
  })
);

// Postgres Pool Setup
const pool = new pg.Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

// Handle HTTP request
app.get('/api/fruits', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM fruits');
    const fruits = data.rows;
    res.send({ fruits: fruits });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.get('/api/orderlist', async (req, res) => {
  try {
    const queryText = 'SELECT o.order_id, o.order_date, oi.order_item_id, f.fruit_name, oi.quantity FROM orders o JOIN order_items oi ON o.order_id = oi.order_id JOIN fruits f on oi.fruit_id = f.fruit_id ORDER BY o.order_date DESC'
    const data = await pool.query(queryText);
    const orders = data.rows;
    res.send({ orders: orders});
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.get('/api/orderhistory', async (req, res) => {
  try {
    const queryText = 'SELECT o.order_id, o.total_price, o.order_date, t.transaction_id, t.transaction_date FROM orders o JOIN transactions t ON o.order_id = t.order_id ORDER BY o.order_date DESC'
    const data = await pool.query(queryText);
    const history = data.rows;
    res.send({ history: history});
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.post('/api/order', async (req, res) => {
  const client = await pool.connect();
  const order = req.body.order;

  try {
    await client.query('BEGIN');
    const orderQuery = 'INSERT INTO orders(total_price) VALUES ($1) RETURNING order_id'
    const itemQuery = 'INSERT INTO order_items(order_id, fruit_id, quantity, price) VALUES ($1, $2, $3, $4)' 
    const transactionQuery = 'INSERT INTO transactions (order_id, amount) VALUES ($1, $2)'

    const orderResult = await client.query(orderQuery, [order.total_price]);
    const order_id = orderResult.rows[0].order_id;

    for (const item of order.cart) {
      await client.query(itemQuery, [order_id, item.fruit_id, item.quantity, item.price*item.quantity]);
    }

    await client.query(transactionQuery, [order_id, order.total_price]);

    await client.query('COMMIT')
    return res.send({ message: "Order added into database" });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).send({ error: "Internal Server Error"});
  } finally {
    client.release();
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});