-- You are given a table, BST, containing two columns: N and P, where N represents the value of a node in Binary Tree, and P is the parent of N.
-- +--------+---------+
-- | Column | Types   |
-- +--------+---------+
-- |   N    | Integer |
-- |   P    | Integer |
-- +--------+---------+

-- Write a query to find the node type of Binary Tree ordered by the value of the node. Output one of the following for each node:
-- Root: If node is root node.
-- Leaf: If node is leaf node.
-- Inner: If node is neither root nor leaf node.

-- Return the result table ordered by N
-- Input:
-- +--------+---------+
-- |    N   |    P    |
-- +--------+---------+
-- |    1   |    2    |
-- |    3   |    2    |
-- |    6   |    8    |
-- |    9   |    8    |
-- |    2   |    5    |
-- |    8   |    5    |
-- |    5   |         |
-- +--------+---------+

-- Note: The row where no value of P is there, it means it is NULL.


-- Output:
-- +----+----------+
-- |  N | NodeType |
-- +----+----------+
-- |1   | Leaf     |
-- |2   | Inner    |
-- |3   | Leaf     |
-- |5   | Root     |
-- |6   | Leaf     |
-- |8   | Inner    |
-- |9   | Leaf     |
-- +----+----------+


-- Explanation

-- FVEURKQ.md.png

-- WHEN P IS NULL → node has no parent, so it’s the Root.
-- WHEN N IN (SELECT P FROM BST WHERE P IS NOT NULL) → node is a parent of some other node → Inner.
-- Otherwise → it must be a Leaf.

-- Write your SQL query here

SELECT N,
    CASE 
        WHEN P IS NULL THEN 'Root'
        WHEN N IN (SELECT P FROM BST WHERE P IS NOT NULL) THEN 'Inner'
        ELSE 'Leaf'
    END AS NodeType
FROM BST
ORDER BY N;