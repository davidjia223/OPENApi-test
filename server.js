require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const runPrompt = async () => {
    const prompt = "Tell simple cat pun";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2000,
        temperature: 0.7,
        top_p:1.0,
        n: 1,
    });

    console.log(response.data);
};

runPrompt();

