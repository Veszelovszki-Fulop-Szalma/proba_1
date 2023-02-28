// NPM modulok importálása
require("dotenv").config();
const express = require("express");
const cors=require("cors");

// Core modulok importálása
const path = require("path");
const fs = require("fs");

// Saját modulok importálása
const rootRoutes = require("./routes/rootRoutes");
const adatbazisCsatlakozas = require("./middlewares/dbConnection");

// Szerver létrehozása, beállítása
const app = express();
const PORT = process.env.PORT || 3500;

// Publikus (statikus dolgok) mappa beállítása
app.use("/", express.static(path.join(__dirname, "public")));
// app.use('/', express.static(path.resolve('public')));
// app.use(express.static(path.resolve('public')));

// Middleware-k beállítása
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Nézet motor konfigurálása
app.set("view engine", "ejs");

// Route-olás
app.use("/", rootRoutes);

app.all("*", (req, res) => {
  res.status(404);
  res.render(path.resolve("views", "404"), { title: "404-es hiba!" });
});

// Mongo adatbázis kezelés
adatbazisCsatlakozas();

// Szerver futtatása
app.listen(PORT, () => {
  console.log(`A szerver fut: http://localhost:${PORT}`);
});
