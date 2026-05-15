# PRODUCT MANAGEMENT ER DIAGRAM (DARAZ)

[Click to see](https://drive.google.com/file/d/180tDV0piPBqmP-eRLWikWgHjO9QSB9iU/view?usp=sharing)

# Question-Answers on SQL

# 1. Difference Between DELETE, TRUNCATE, DROP

| Command  | Description                        |
| -------- | ---------------------------------- |
| DELETE   | Removes selected rows from a table |
| TRUNCATE | Removes all rows from a table      |
| DROP     | Deletes the entire table           |

## DELETE

```sql
DELETE FROM employees
WHERE id = 1;
```

## TRUNCATE

```sql
TRUNCATE TABLE employees;
```

## DROP

```sql
DROP TABLE employees;
```

---

# 2. What is a PRIMARY KEY?

A PRIMARY KEY:

- uniquely identifies each row
- cannot contain NULL values
- cannot contain duplicate values

Example:

```sql
id SERIAL PRIMARY KEY
```

---

# 3. Difference Between PRIMARY KEY and UNIQUE KEY

| PRIMARY KEY              | UNIQUE KEY            |
| ------------------------ | --------------------- |
| only one per table       | multiple allowed      |
| NULL not allowed         | NULL allowed          |
| uniquely identifies rows | ensures unique values |

Example:

```sql
id INT PRIMARY KEY,
email VARCHAR(50) UNIQUE
```

---

# 4. What is a FOREIGN KEY?

A FOREIGN KEY connects two tables.

Example:

```sql
FOREIGN KEY (user_id) REFERENCES users(id)
```

It connects:

- `orders.user_id`
  with
- `users.id`

---

# 5. What is JOIN in SQL?

JOIN combines data from multiple tables.

## INNER JOIN

Shows only matching rows.

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

## LEFT JOIN

Shows all rows from the left table.

```sql
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;
```

---

# 6. What is Normalization?

Normalization organizes data to reduce duplication.

## 1NF (First Normal Form)

- each column should contain single values
- no multiple values in one column

## 2NF (Second Normal Form)

- must follow 1NF
- all columns should depend on the full primary key

## 3NF (Third Normal Form)

- must follow 2NF
- non-key columns should depend only on the primary key

---

# 7. What is Indexing?

Indexing improves search speed in a database.

Why use indexing?

- faster data retrieval
- improves query performance

Example:

```sql
CREATE INDEX idx_email
ON users(email);
```

---

# 8. Difference Between WHERE and HAVING

| WHERE                | HAVING               |
| -------------------- | -------------------- |
| filters rows         | filters grouped data |
| used before GROUP BY | used after GROUP BY  |

## WHERE Example

```sql
SELECT * FROM employees
WHERE salary > 5000;
```

## HAVING Example

```sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 2;
```

---

# 9. What is a Transaction in SQL?

A transaction is a group of SQL operations treated as one unit.

## COMMIT

Saves changes permanently.

```sql
COMMIT;
```

## ROLLBACK

Cancels changes.

```sql
ROLLBACK;
```

## Example

```sql
BEGIN;

UPDATE employees
SET salary = salary + 1000
WHERE id = 1;

ROLLBACK;
```

---

# 10. Query to Find Second Highest Salary

```sql
SELECT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

# Question-Answers on ERD

### What is the difference between Primary Key and Foreign Key?

A primary key uniquely identifies each row in a table and A foreign key connects one table to another table.

### Why is normalization important?

Normalization is important because it keeps your database clean, correct, and easy to manage by removing duplicate data, reducing data inconsistency, improving data integrity, making updates easier, saving storage space, and making the database easier to maintain.

### What is a JOIN?

A JOIN is used in SQL to combine rows from two or more tables based on a related column.

### Difference between SQL and MongoDB?

SQL uses structured tables with fixed schema, while MongoDB uses flexible JSON-like documents with dynamic schema.

### What is a composite key?

A composite key is a primary key made using two or more columns together.

### What is a weak entity?

A weak entity is an entity that cannot exist without a related strong entity and depends on it for identification.

### Why do we use constraints?

Constraints are used to enforce rules on data to keep it valid, accurate, and consistent.

### Explain many-to-many relationship.

A many-to-many relationship means multiple rows in one table can relate to multiple rows in another table, usually managed using a junction table.

### What is the difference between Clustered and Non-Clustered Index?

A clustered index sorts and stores data physically in order, while a non-clustered index creates a separate structure pointing to data rows.

### Explain Database Sharding and Partitioning. When would you use each?

Sharding splits a database across multiple servers for scaling large systems, while partitioning divides data within the same database for better performance and management.

I will use sharding when my application has very large data or very high traffic that one database server cannot handle, and I need to distribute the load across multiple servers.

I will partitioning when my data is growing but still manageable in a single database server, and I want better performance, faster queries, and easier maintenance without adding new servers.
