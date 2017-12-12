CREATE TABLE owners (
  owner_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE manufacturers (
  manufacturer_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE cars (
  car_id SERIAL PRIMARY KEY,
  model VARCHAR(255),
  manufacturer_id INT REFERENCES manufacturers(manufacturer_id)
);

CREATE TABLE car_owners (
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES owners(owner_id),
  car_id INT REFERENCES cars(car_id)
);