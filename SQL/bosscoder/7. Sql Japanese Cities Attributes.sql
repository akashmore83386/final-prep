-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN (All in UPPERCASE).

-- The CITY table is described as follows:
-- +--------------+--------------+
-- | ID           |  NUMBER      |
-- +--------------+--------------+
-- | NAME         |  VARCHAR2(17)|
-- | COUNTRY CODE |  VARCHAR2(3) |
-- | DISTRICT     |  VARCHAR2(20)|
-- | POPULATION   |  NUMBER      |
-- +--------------+--------------+ 

-- Input:
-- +---+----------+-------------+---------------+-------------+
-- |ID |	NAME   | COUNTRYCODE | DISTRICT	     | POPULATION  |
-- +---+----------+-------------+---------------+-------------+
-- |1  | Tokyo    | JPN	     | Tokyo	     | 9000000     |
-- |2  | New York | USA         | New York      | 8400000     |
-- |3  | Paris    | FRA         | Île-de-France | 2100000     |
-- +---+----------+-------------+---------------+-------------+

-- Output:
-- +---+----------+-------------+---------------+-------------+
-- |ID |	NAME   | COUNTRYCODE | DISTRICT	     | POPULATION  |
-- +---+----------+-------------+---------------+-------------+
-- |1  | Tokyo    | JPN	     | Tokyo	     | 9000000     |
-- +---+----------+-------------+---------------+-------------+

SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN';