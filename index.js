const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const imageRoutes = require("./routes/imageRoutes");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/images/", imageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
