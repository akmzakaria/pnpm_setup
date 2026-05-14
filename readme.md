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
