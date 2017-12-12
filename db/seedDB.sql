INSERT INTO owners (name) VALUES
  ('Ray Greene'),
  ('Leslie Thompson'),
  ('Iris Caldwell'),
  ('Bernard Blake');

INSERT INTO manufacturers (name) VALUES
  ('Ford'),
  ('Chevrolet'),
  ('BMW'),
  ('Mercedes');

INSERT INTO cars (model, manufacturer_id) VALUES
  ('Mustang','1'),
  ('F150', '1'),
  ('Impala', '2'),
  ('Volt', '2'),
  ('328i', '3'),
  ('740il', '3'),
  ('E400', '4'),
  ('S500', '4');

INSERT INTO car_owners (owner_id, car_id) VALUES
  ('1','1'),
  ('1','5'),
  ('2','4'),
  ('3','4'),
  ('4','5'),
  ('4','3');  
