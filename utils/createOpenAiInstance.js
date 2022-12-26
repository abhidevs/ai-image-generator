const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const createOpenAiInstance = () => {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });

    return new OpenAIApi(configuration);
};

module.exports = { createOpenAiInstance };
