const express = require("express");
const imageControllers = require('../controllers/imageControllers')

const router = express.Router();

router.post("/generate", imageControllers.generateImage);

module.exports = router;
