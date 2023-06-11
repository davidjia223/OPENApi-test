// server.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const openaiApiKey = process.env.OPENAI_API_KEY;

app.get('/generate', async (req, res) => {
  const prompt = 'Translate the following English text to French: "{text}"';
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: prompt,
      max_tokens: 60,
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    res.send(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating text');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));
