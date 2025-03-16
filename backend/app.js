require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path=require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));


// Serve static files from the "public" folder


// MongoDB Connection using environment variable
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define Schema & Model for form submissions
const FormDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});
const FormData = mongoose.model("FormData", FormDataSchema);

// API Routes

// Basic API endpoint to check if server is running
app.get("/api", (req, res) => {
  res.send("API is running");
});

// Form submission route
app.post("/submit-form", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Received form data:", req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newFormData = new FormData({ name, email, message });
    await newFormData.save();

    res.status(201).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
