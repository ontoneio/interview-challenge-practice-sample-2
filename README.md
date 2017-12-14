# Foundations -> Practice Challenge

## Install Instructions
- Run `npm install`
- Run `npm run db:init`
- Use `npm run dev:start to start the server`

## Database
![](cars ERD.png)

## SQL
- Create a function that returns a promise that resolves to a list of all car owners.
- Create a function that returns a promise that resolves to a list of all car models and their manufacturers.
- Create a function that takes an owner's name as a case-insensitive argument that returns a promise that resolves to a list of all cars owned by a specific owner.
- Create a function that takes a manufacturer name as an argument that returns a promise that resolves to a list of all cars made by that manufacturer.
- Create a function that takes a model name and manufacturer name as arguments that returns a promise that resolves to adding a car to the database.

## Routes
- Create a route for `/api/manufacturers/:manufacturer_id/owners` that renders `owners.pug` that displays all owners for a particular manufacturer name.
- Create a route for `api/manufacturers/:manufacturer/cars` that renders a page that displays all cars for a particular manufacturer name.
- Create a route for `api/cars/list` that renders a page that displays all cars and their manufacturers.
- Create a route for `/cars/create` that takes in form data that adds a new car to the database and then redirects to the `api/cars/list` route.
  - Data passed via the form should be a model name and manufacturer name

## DOM Manipulation
Create a button on 'owners.pug' that adds an owner to the page.__Note: There is no need to update the database or communicate with the server in any way.__