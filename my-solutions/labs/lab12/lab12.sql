CREATE TABLE finals AS
  SELECT "RSF" AS hall, "61A" as course UNION
  SELECT "Wheeler"    , "61A"           UNION
  SELECT "Pimentel"   , "61A"           UNION
  SELECT "Li Ka Shing", "61A"           UNION
  SELECT "Stanley"    , "61A"           UNION
  SELECT "RSF"        , "61B"           UNION
  SELECT "Wheeler"    , "61B"           UNION
  SELECT "Morgan"     , "61B"           UNION
  SELECT "Wheeler"    , "61C"           UNION
  SELECT "Pimentel"   , "61C"           UNION
  SELECT "Soda 310"   , "61C"           UNION
  SELECT "Soda 306"   , "10"            UNION
  SELECT "RSF"        , "70";

CREATE TABLE sizes AS
  SELECT "RSF" AS room, 900 as seats    UNION
  SELECT "Wheeler"    , 700             UNION
  SELECT "Pimentel"   , 500             UNION
  SELECT "Li Ka Shing", 300             UNION
  SELECT "Stanley"    , 300             UNION
  SELECT "Morgan"     , 100             UNION
  SELECT "Soda 306"   , 80              UNION
  SELECT "Soda 310"   , 40              UNION
  SELECT "Soda 320"   , 30;

CREATE TABLE big AS
  SELECT f.course FROM finals AS f, sizes AS s WHERE f.hall = s.room GROUP BY f.course HAVING SUM(s.seats) >= 1000;

CREATE TABLE remaining AS
  SELECT f.course, SUM(s.seats) - MAX(s.seats) AS remaining FROM finals AS f, sizes AS s WHERE f.hall = s.room GROUP BY f.course;

CREATE TABLE sharing AS
    SELECT fa.course, COUNT(DISTINCT fa.hall) AS shared FROM finals AS fa, finals AS fb WHERE fa.hall = fb.hall AND fa.course <> fb.course GROUP BY fa.course;

CREATE TABLE pairs AS
  SELECT sa.room || " and " || sb.room || " together have " || (sa.seats + sb.seats) || " seats" AS rooms FROM sizes AS sa, sizes AS sb WHERE sa.room < sb.room AND sa.seats + sb.seats >= 1000 ORDER BY sa.seats + sb.seats DESC;

