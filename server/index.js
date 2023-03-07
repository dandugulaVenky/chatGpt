import { Configuration, OpenAIApi } from "openai";
import express from "express"
import cors from 'cors'
const configuration = new Configuration({
   
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())
const port = 3080

app.post('/', async (req, res) => {
    let message=req.body.message
    const response = await openai.createCompletion ({
        model: "text-davinci-003",
        prompt: message,
        max_tokens:4000,
        temperature: 0,
    });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })
});

app.listen("3080",()=>{
    console.log('running')
})






