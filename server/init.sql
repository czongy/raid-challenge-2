-- CREATE TABLE users (
--     user_id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     email VARCHAR(100) NOT NULL UNIQUE,
--     role VARCHAR(20) CHECK (role IN ('customer', 'owner')) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

CREATE TABLE fruits (
    fruit_id SERIAL PRIMARY KEY,
    fruit_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    img_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    total_price DECIMAL(10, 2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    fruit_id INT REFERENCES fruits(fruit_id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(order_id) ON DELETE CASCADE,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2) NOT NULL
);

INSERT INTO fruits(fruit_name, price, stock, img_url)
VALUES
('acerola', 3.50, 10, 'https://i.ibb.co/dJjNJF2/acerola.jpg'),
('apple', 2.00, 20, 'https://i.ibb.co/Trsss8F/apple.jpg'),
('apricot', 1.50, 13, 'https://i.ibb.co/rMVYP77/apricot.jpg'),
('avocado', 4.50, 20, 'https://i.ibb.co/CzXB0Lf/avocado.jpg'),
('banana', 2.50, 25, 'https://i.ibb.co/6v8gzVv/banana.jpg'),
('orange', 4.00, 0, 'https://i.ibb.co/s58nHyB/orange.jpg'),
('pear', 2.30, 30, 'https://i.ibb.co/Vv89XdH/pear.jpg');

