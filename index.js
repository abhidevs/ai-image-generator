const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT || 8000;
const app = express();

// configurations
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// api routes
app.use("/api/images/", imageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
