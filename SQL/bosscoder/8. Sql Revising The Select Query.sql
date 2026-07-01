-- Query all columns for all American cities in the CITY table with populations larger than 100000. The CountryCode for America is USA.

-- The CITY table is described as follows:
-- +--------------+--------------+
-- | ID           |  NUMBER      |
-- +--------------+--------------+
-- | NAME         |  VARCHAR2(17)|
-- | COUNTRY CODE |  VARCHAR2(3) |
-- | DISTRICT     |  VARCHAR2(20)|
-- | POPULATION   |  NUMBER      |
-- +--------------+--------------+ 

-- The input and output form is given in following example.

-- Input:
-- +---+------------+-------------+---------------+-------------+
-- |ID |	NAME     | COUNTRYCODE | DISTRICT	   | POPULATION  |
-- +---+------------+-------------+---------------+-------------+
-- | 1 | New York   | USA         | New York      |8008278      |
-- | 2 | Los Angeles| USA         | California    |3694820      |
-- | 3 | Chicago    | USA         | Illinois      |2896016      |
-- | 4 | Toronto    | CAN         | Ontario       |3000000      |
-- | 5 | Houston    | USA         | Texas         |1953631      |
-- +---+------------+-------------+---------------+-------------+

-- Output:
-- +---+------------+-------------+---------------+-------------+
-- |ID |	NAME     | COUNTRYCODE | DISTRICT	   | POPULATION  |
-- +---+------------+-------------+---------------+-------------+
-- | 1 | New York   | USA         | New York      |8008278      |
-- | 2 | Los Angeles| USA         | California    |3694820      |
-- | 3 | Chicago    | USA         | Illinois      |2896016      |
-- | 5 | Houston    | USA         | Texas         |1953631      |
-- +---+----------+-------------+---------------+---------------+

SELECT *
FROM CITY
WHERE COUNTRYCODE = 'USA' 
  AND POPULATION > 100000;