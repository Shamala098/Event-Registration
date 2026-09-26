const express = require("express");

const app = express();
const PORT = 3000;

// Serve HTML, CSS and JavaScript files
app.use(express.static("public"));

app.use(express.json());

// Registration API
app.post("/register", (req, res) => {
    const { name, email, phone, event, college } = req.body;

    if (!name || !email || !phone || !event || !college) {
        return res.status(400).json({
            success: false,
            message: "Please fill all the fields."
        });
    }

    console.log("New Registration:");
    console.log({
        name,
        email,
        phone,
        event,
        college
    });

    res.json({
        success: true,
        message: "Registration successful!",
        data: {
            name,
            email,
            phone,
            event,
            college
        }
    });
});

app.listen(PORT, () => {
    console.log(`Event Registration Server running at:`);
    console.log(`http://localhost:${PORT}`);
});