const fruits = [
  {
    fruit_id: 1,
    fruit_name: "acerola",
    price: 3.50,
    stock: 10,
    img_url: "https://i.ibb.co/dJjNJF2/acerola.jpg",
  },
  {
    fruit_id: 2,
    fruit_name: "apple",
    price: 2.00,
    stock: 20,
    img_url: "https://i.ibb.co/Trsss8F/apple.jpg",
  },
  {
    fruit_id: 3,
    fruit_name: "apricot",
    price: 1.50,
    stock: 13,
    img_url: "https://i.ibb.co/rMVYP77/apricot.jpg",
  },
  {
    fruit_id: 4,
    fruit_name: "avocado",
    price: 4.50,
    stock: 20,
    img_url: "https://i.ibb.co/CzXB0Lf/avocado.jpg",
  },
  {
    fruit_id: 5,
    fruit_name: "banana",
    price: 2.50,
    stock: 25,
    img_url:
      "https://i.ibb.co/6v8gzVv/banana.jpg",
  },  
  {
    fruit_id: 6,
    fruit_name: "orange",
    price: 4.00,
    stock: 0,
    img_url: "https://i.ibb.co/s58nHyB/orange.jpg",
  },
  {
    fruit_id: 7,
    fruit_name: "pear",
    price: 2.30,
    stock: 30,
    img_url: "https://i.ibb.co/Vv89XdH/pear.jpg",
  },
];

const users = [
  {
    user_id: 1,
    username: "cherry",
    password: 123456,
    email: "cherry@email.com",
    role: "customer",
    created_at: "2024-02-01"
  },
  {
    user_id: 2,
    username: "mary",
    password: 123456,
    email: "mary@email.com",
    role: "customer",
    created_at: "2024-02-02"
  },
  {
    user_id: 3,
    username: "Daek",
    password: 123456,
    email: "daek@email.com",
    role: "customer",
    created_at: "2024-02-05"
  },
  {
    user_id: 4,
    username: "ethan",
    password: 123456,
    email: "ethan@email.com",
    role: "customer",
    created_at: "2024-02-10"
  }
];

const orders = [
  {
    order_id: 1,
    user_id: 1,
    total_price: 10.50,
    order_date: "2024-04-01"
  },
  {
    order_id: 2,
    user_id: 2,
    total_price: 22.50,
    order_date: "2024-04-03"
  },
  {
    order_id: 3,
    user_id: 3,
    total_price: 8.50,
    order_date: "2024-04-04"
  },
  {
    order_id: 4,
    user_id: 4,
    total_price: 32.50,
    order_date: "2024-04-05"
  }
];

const order_items = [
  {
    order_item_id: 1,
    order_id: 1,
    fruit_id: 1,
    quantity: 3,
    price: 10.50
  },
  {
    order_item_id: 2,
    order_id: 2,
    fruit_id: 1,
    quantity: 2,
    price: 7.00
  },
  {
    order_item_id: 3,
    order_id: 2,
    fruit_id: 3,
    quantity: 7,
    price: 10.50
  },
  {
    order_item_id: 4,
    order_id: 2,
    fruit_id: 3,
    quantity: 7,
    price: 10.50
  },
  {
    order_item_id: 5,
    order_id: 2,
    fruit_id: 5,
    quantity: 2,
    price: 5.00
  },
  {
    order_item_id: 6,
    order_id: 3,
    fruit_id: 4,
    quantity: 1,
    price: 4.50
  },
  {
    order_item_id: 7,
    order_id: 3,
    fruit_id: 6,
    quantity: 1,
    price: 4.00
  }
];

const transactions = [
  {
    transactions_id: 1,
    order_id: 1,
    transactions_date: "2024-04-01",
    amount: 10.50,
  },
  {
    transactions_id: 2,
    order_id: 2,
    transactions_date: "2024-04-03",
    amount: 22.50,
  },
  {
    transactions_id: 3,
    order_id: 3,
    transactions_date: "2024-04-04",
    amount: 8.50,
  }
]

export {fruits, users, orders, order_items, transactions};