/* Imports */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// Config JSON response
app.use(express.json());

// Open Route - Public Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API" });
});

// Register User
app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  // Validations
  if (!name) {
    res.status(422).json({ msg: "O nome é obrigatório!" });
    return;
  }
});
// Credencials
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.3muo69a.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectado com sucesso!");
  })
  .catch((err) => console.log(err));
