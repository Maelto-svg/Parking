INSERT INTO SP_PARKINGSLOT(id, name, location, capacity) VALUES(1, 'Carrouf', 'ici', 200);

INSERT INTO SP_PARKINGSPOT(id, spotnumber, isoccupied, lot_id) VALUES(5, '0', false, 1);
INSERT INTO SP_PARKINGSPOT(id, spotnumber, isoccupied, lot_id) VALUES(6, '1', true, 1);


INSERT INTO SP_VEHICLE(id, plate, type, spot_id) VALUES(1, '12-ABC-34', 'CAR', 5);
INSERT INTO SP_VEHICLE(id, plate, type, spot_id) VALUES(2, '56-DEF-78', 'MOTORCYCLE', 6);
