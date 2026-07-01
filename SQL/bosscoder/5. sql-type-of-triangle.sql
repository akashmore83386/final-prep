-- Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:


-- Equilateral: It's a triangle with 3 sides of equal length.
-- Isosceles: It's a triangle with 2 sides of equal length.
-- Scalene: It's a triangle with 3 sides of differing lengths.
-- Not A Triangle: The given values of A, B, and C don't form a triangle.


-- Input Format
-- The TRIANGLES table is described as follows:
--  +--------+---------+
--  | Column |  Type   | 
--  +--------+---------+
--  |    A   | Integer |
--  |    B   | Integer |
--  |    C   | Integer |
--  +--------+---------+

-- Each row in the above table denotes the lengths of each of a triangle's three sides.

-- Input
-- +-----+-----+------+
-- |  A  |  B  |  C   |
-- +-----+-----+------+
-- | 20  | 20  |  23  |
-- | 20  | 20  |  20  |
-- | 20  | 21  |  22  |
-- | 13  | 14  |  30  |
-- +-----+-----+------+

-- Output
-- +----------------+
-- |  TriangleType  |
-- +----------------+
-- | Isosceles      |
-- +----------------+
-- | Equilateral    |
-- +----------------+
-- | Scalene        |
-- +----------------+
-- | Not A Triangle |
-- +----------------+


-- Explanation
-- Values in the tuple1 form an Isosceles triangle, because A=B.
-- Values in the tuple2 form an Equilateral triangle, because A=B=C.
-- Values in the tuple3 form a Scalene triangle, because A is not equal to B not equal to C.
-- Values in the tuple4 cannot form a triangle because the combined value of sides A and B and is not larger than that of side C.

SELECT 
    CASE 
        -- Step 1: Check if it's a valid triangle
        WHEN A + B <= C OR A + C <= B OR B + C <= A THEN 'Not A Triangle'
        
        -- Step 2: Check for Equilateral (all sides equal)
        WHEN A = B AND B = C THEN 'Equilateral'
        
        -- Step 3: Check for Isosceles (any two sides equal)
        WHEN A = B OR B = C OR A = C THEN 'Isosceles'
        
        -- Step 4: If it passes all above, it must be Scalene
        ELSE 'Scalene'
    END AS TriangleType
FROM TRIANGLES;