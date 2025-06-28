---
tags: ['SQL', 'Database']
---

Tags : [[SQL, Database]]

# 🗄️ SQL Basics

SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It's essential for any developer working with data.

## 📊 Basic SQL Commands

### SELECT
Retrieves data from tables:

```sql
SELECT column1, column2 FROM table_name;
SELECT * FROM users;
```

### INSERT
Adds new records:

```sql
INSERT INTO users (name, email) 
VALUES ('John Doe', 'john@example.com');
```

### UPDATE
Modifies existing records:

```sql
UPDATE users 
SET email = 'newemail@example.com' 
WHERE id = 1;
```

### DELETE
Removes records:

```sql
DELETE FROM users WHERE id = 1;
```

## 🔍 Filtering and Sorting

### WHERE Clause
Filters records based on conditions:

```sql
SELECT * FROM users WHERE age > 18;
SELECT * FROM products WHERE price BETWEEN 10 AND 50;
```

### ORDER BY
Sorts results:

```sql
SELECT * FROM users ORDER BY name ASC;
SELECT * FROM products ORDER BY price DESC;
```

### LIMIT
Restricts the number of results:

```sql
SELECT * FROM users LIMIT 10;
```

## 🔗 Joins

### INNER JOIN
Returns matching records from both tables:

```sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

### LEFT JOIN
Returns all records from the left table:

```sql
SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```

## 📈 Aggregate Functions

- COUNT(): Counts rows
- SUM(): Adds values
- AVG(): Calculates average
- MAX(): Finds maximum
- MIN(): Finds minimum

```sql
SELECT COUNT(*) FROM users;
SELECT AVG(price) FROM products;
```

SQL is the foundation of data management!