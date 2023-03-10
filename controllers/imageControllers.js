const { createOpenAiInstance } = require("../utils/createOpenAiInstance");

const openai = createOpenAiInstance();

const generateImage = async (req, res) => {
    const { prompt, size } = req.body;

    const imageSize =
        size === "large"
            ? "1024x1024"
            : size === "medium"
            ? "512x512"
            : "256x256";

    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: imageSize,
        });

        const imageUrl = response.data.data[0].url;

        res.status(200).json({
            success: true,
            imageUrl: imageUrl,
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(500).json({
            success: false,
            message: "Something went wrong, unable to generate image",
        });
    }
};

module.exports = { generateImage };
