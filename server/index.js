import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import bodyParser from 'body-parser'
import { Configuration, OpenAIApi } from 'openai'

const app = express()
env.config()

app.use(cors())
app.use(bodyParser.json())

const configuration = new Configuration({
    organization: "org-HJL0uhEbLBrpz72Id4WENlv6",
    apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

app.listen('3080',
    () => console.log("listening on port 3080"))

app.get('/', (req, res) => {
    res.send('hello world')
})

//post route for making requests
