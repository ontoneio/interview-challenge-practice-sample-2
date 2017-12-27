const pgp = require('pg-promise')()

const connection = 'postgres:///cars'
const db = pgp(connection)

const getCarOwners = () => {
  db.any(`
    SELECT o.owner_id, o.name 
    FROM owners AS o
    JOIN car_owners AS co 
    ON co.owner_id = co.id;
  `)
}
// getCarOwners()
// 18 minutes

const getManufacturerAndModel = () => {
  db.any(`
    SELECT name, model FROM manufacturers AS mfc
    JOIN cars
    ON cars.manufacturer_id = mfc.manufacturer_id;`)
}
// getManufacturerAndModel()
// 11 min 30sec 

const getOwnersCars = (ownerName) => {
  const lowerCaseOwner = ownerName.toLowerCase();
  db.any(
    `
    SELECT mfc.name, cars.model 
    FROM manufacturers AS mfc
    JOIN cars 
    ON cars.manufacturer_id = mfc.manufacturer_id
    JOIN car_owners AS co
    ON co.car_id = cars.car_id
    JOIN owners ON owners.owner_id = co.owner_id
    WHERE lower(owners.name) = $1;
    `
    ,lowerCaseOwner)
}
// 28 min
// getOwnersCars('Ray Greene')

const getManufacturersCars = (manufacturerName) => {
  const mfcNameLower = manufacturerName.toLowerCase();
  db.any(
    `
    SELECT model FROM manufacturers AS mfc
    JOIN cars ON cars.manufacturer_id = mfc.manufacturer_id
    WHERE lower(mfc.name) = $1;
    `,
    mfcNameLower)
    .then(console.log)
    .catch(console.error)
}
// 12min 20sec
// getManufacturersCars('Ford')

const addCar = (modelName, mfcName) => {
  db.query(`
  INSERT
  `)
}