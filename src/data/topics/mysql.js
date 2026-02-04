export const mysqlData = {
  title: "MySQL Database",
  subtitle: "SQL queries, joins, and database concepts",
  questions: [
    {
      id: "sql1",
      title: "1. Basic SELECT Query",
      desc: "Retrieving data from a database table",
      output: "id | name | age\n1 | John | 25\n2 | Alice | 30",
      code: {
        sql: `-- Create table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

-- Insert data
INSERT INTO users VALUES (1, 'John', 25);
INSERT INTO users VALUES (2, 'Alice', 30);

-- Select all users
SELECT * FROM users;

-- Select with condition
SELECT name, age FROM users WHERE age > 25;`
      }
    },
    {
      id: "sql2",
      title: "2. JOIN Operations",
      desc: "Combining data from multiple tables",
      output: "order_id | customer_name | product\n101 | John | Laptop\n102 | Alice | Phone",
      code: {
        sql: `-- INNER JOIN example
SELECT o.order_id, c.name AS customer_name, o.product
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

-- LEFT JOIN example
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;`
      }
    },
    {
      id: "sql3",
      title: "3. Aggregate Functions",
      desc: "Using COUNT, SUM, AVG, MAX, MIN",
      output: "total_orders: 150\naverage_amount: 250.50",
      code: {
        sql: `-- Count total records
SELECT COUNT(*) AS total_orders FROM orders;

-- Calculate average
SELECT AVG(amount) AS average_amount FROM orders;

-- Group by with aggregate
SELECT customer_id, COUNT(*) AS order_count, SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING total_spent > 1000;`
      }
    }
  ],
  top10: [
    {
      q: "What is the difference between INNER JOIN and OUTER JOIN?",
      a: "INNER JOIN returns only matching rows from both tables. OUTER JOIN (LEFT, RIGHT, FULL) returns matching rows plus non-matching rows from one or both tables with NULL for missing values."
    },
    {
      q: "What is normalization and its types?",
      a: "Normalization organizes data to reduce redundancy. 1NF: atomic values, unique rows. 2NF: 1NF + no partial dependencies. 3NF: 2NF + no transitive dependencies. BCNF: stricter 3NF. Improves data integrity and reduces anomalies."
    },
    {
      q: "What is the difference between WHERE and HAVING?",
      a: "WHERE filters rows before grouping (used with individual records). HAVING filters groups after GROUP BY (used with aggregate functions). WHERE is processed first, HAVING after aggregation."
    },
    {
      q: "What are indexes and why use them?",
      a: "Indexes are data structures that improve query speed by creating pointers to data locations. They speed up SELECT queries but slow down INSERT/UPDATE/DELETE. Use on frequently queried columns and foreign keys."
    },
    {
      q: "What is a primary key vs foreign key?",
      a: "Primary key uniquely identifies each record in a table (cannot be NULL, must be unique). Foreign key creates relationship between tables by referencing primary key of another table. Enforces referential integrity."
    },
    {
      q: "What are ACID properties?",
      a: "Atomicity: transaction completes fully or not at all. Consistency: database remains in valid state. Isolation: concurrent transactions don't interfere. Durability: committed data persists even after system failure."
    },
    {
      q: "What is the difference between DELETE, TRUNCATE, and DROP?",
      a: "DELETE removes specific rows (can use WHERE), can be rolled back, triggers fire. TRUNCATE removes all rows, faster, cannot be rolled back, resets identity. DROP removes entire table structure and data."
    },
    {
      q: "What are stored procedures?",
      a: "Precompiled SQL statements stored in database. Accept parameters, contain business logic, improve performance by reducing network traffic. Support control flow (IF, WHILE), error handling, and reusability."
    },
    {
      q: "What is the difference between UNION and UNION ALL?",
      a: "UNION combines result sets and removes duplicates (slower). UNION ALL combines result sets keeping all duplicates (faster). Both require same number of columns with compatible data types."
    },
    {
      q: "What are triggers in MySQL?",
      a: "Triggers are automatic stored procedures that execute in response to events (INSERT, UPDATE, DELETE). They enforce business rules, maintain audit trails, and ensure data integrity. Can be BEFORE or AFTER triggers."
    }
  ]
};