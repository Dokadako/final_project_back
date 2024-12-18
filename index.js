const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к базе данных
mongoose
    .connect('mongodb+srv://kadyrovdaniyal:Daniyal01@dokadako.opkwr3n.mongodb.net/?retryWrites=true&w=majority&appName=Dokadako', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

// Простая маршрутизация
app.get("/", (req, res) => {
    res.send("Welcome to the Online Store API!");
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

