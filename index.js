import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const runPrompt = async () => {
    
    const promp = "Tell me a joke about cat eating pasta.";

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2000,
        temperature: 1,

    });

    console.log(response.data);
};

runPrompt();
