import express from 'express';

const express = require('express');
const sqlite3 = require("sqlite3").verbose();

const app = express();
const database = new sqlite3.Database("./globalmenu.db");
// const mysql = require("mysql");
database.serialize(() => {
  database.run('CREATE TABLE IF NOT EXISTS menu_db (id INT PRIMARY KEY, product STRING NOT null, description STRING NOT null, cost INT NOT NULL);')})

app.use(express.json());

app.post('/submit', (req, res) => {
  const { product, description, cost } = req.body;
  database.run('INSERT INTO menu_db (product, description, cost) VALUES ("${req.body.product}", "${req.body.description}", "${req.body.cost}");', () => {res.json("Ēdienkarte sekmīgi atjaunota");})
});

app.get('/menu', (req, res) => {
  database.all('SELECT * FROM menu_db', (error, menu) => {
    res.json(menu)
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000")
});