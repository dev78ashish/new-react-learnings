const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")


app.use(cors())

const userData = {
    name: "Anjul Singhal",
    email: "anjul@example.com",
    mobile: "9876543210",
    doj: "2025-03-01T12:34:56.789Z", 
    gender: "other",
    age: 56,
    percentage: "78",
    address: "1123, Sec-48",
    city: "Gurgaon",
    country: "uk",
    pincode: "12345",
    terms: true
};

app.get("/user-data", (req, res) => {
    res.json(userData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
