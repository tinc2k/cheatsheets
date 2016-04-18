# MySQL

```
CREATE TABLE Users (
  id bigint NOT NULL AUTO_INCREMENT,
  first_name varchar(255),
  last_name varchar(255),
  email varchar(255) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

ALTER TABLE Users ADD INDEX i_email(email);

CREATE TABLE Orders (
  id bigint NOT NULL AUTO_INCREMENT,
  user_id bigint NOT NULL,
  timestamp datetime NOT NULL,
  description text,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

INSERT INTO Users(id, first_name, last_name, email) VALUES
  (1, 'David', 'Gilmour', 'info@davidgilmour.com'),
  (2, 'Roger', 'Waters', 'help@rogerwaters.com');

INSERT INTO Orders(id, user_id, timestamp, description) VALUES
  (1, 1, '2016-04-17T08:54:11+00:00', 'A bunch of old Fenders'),
  (2, 1, '2016-04-18T11:42:26+00:00', 'A shiny Echoplex.');

SELECT Users.id, Users.email, Orders.timestamp, Orders.description
  FROM Orders
  LEFT JOIN Users ON Users.id = Orders.Id
  WHERE 1;

```
