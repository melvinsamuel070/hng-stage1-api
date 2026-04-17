const express = require('express');
const app = express();

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: "API is running"
    });
});

// HEALTH - FIXED
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

// ME
app.get('/me', (req, res) => {
    res.status(200).json({
        name: "Ugwu Samuel Ebube",
        email: "melvinsamuel070@gmail.com",
        github: "https://github.com/melvinsamuel070"
    });
});

// API
app.get('/api', (req, res) => {
    res.status(200).json({
        message: "HNGI14 Stage 0",
        track: "DevOps",
        username: "UgwuSamuelEbube"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
