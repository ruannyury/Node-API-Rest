const express = require('express')
const morgan = require('morgan') // Log de requisições
const cors = require('cors') // Digo a ele quem vai poder fazer as requisições
const bodyParser = require('body-parser') // Serialização das requisições
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(21238, () => {
    console.log(`Express started at http://localhost:21238`)
}) // Nodemon - atualiza sempre quando algo é alterado