import express from 'express'
import { Express } from 'express'
import router from './routes/routes'
// Definições padrão de server Express;
const server: Express = express()
const port = 7001
let timeout = require('connect-timeout')
server.use(express.json())
server.use('/tmdb-app', router)
// Launch do Server; 
server.listen(port, () => {
    console.log(`Servidor lançado e rodando na porta:${port}`)
})
