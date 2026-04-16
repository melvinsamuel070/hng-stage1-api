const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/me", (req, res) => {
    res.status(200).json({
        name: "Ugwu Samuel Ebube",
        email: "melvinsamuel070@gmail.com",
        github: "https://github.com/melvinsamuel070"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
