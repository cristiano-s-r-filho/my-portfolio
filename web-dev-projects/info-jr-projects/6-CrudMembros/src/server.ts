import { PrismaClient } from "@prisma/client"
import { configDotenv } from "dotenv"
import { Request,Response } from "express"
// Definições padrão de um Projeto Express
configDotenv() 
const express = require('express')
const app = express()
const port = 7000

const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas de Leitura da Tabela - READ
app.get('/leitura', async (req:Request,res:Response) => {
    const table = await prisma.user.findMany()
    res.send(table)
})
app.get('/ler_id', async (req:Request,res:Response) => {
    const search:number = Number(req.query.id)
    const findUser = await prisma.user.findUnique({where: {
        id:search
    }})
    res.send(findUser)
})
app.get('/ler_email', async(req:Request,res:Response)=>{
    const search:string = String(req.query.email)
    const findUser = await prisma.user.findUnique({where:{
        email: search
    }})
    res.send(findUser)
})
app.get('/ler_usuarios', async (req:Request,res:Response) => {
    const dict_key = req.query.name
    const dict_arr = String(dict_key).split(';')
    const findUserArr = await prisma.user.findMany({where: {
        nome:{in: dict_arr}
    }})
    res.send(findUserArr)    
})
// Rota de Adição de um Usuário por Email - CREATE
app.post('/criar_usuario', async (req:Request,res:Response) => {
    const email:string = String(req.query.email)
    const name:string = String(req.query.name)
    const password:string = String(req.query.senha)
    const age:number= Number(req.query.idade)
    const state:string = String(req.query.estado)
    const city:string = String(req.query.cidade)
    const user = await prisma.user.create({
        data: {
            email:email,
            nome:name,
            senha:password,
            idade:age,
            estado:state,
            cidade:city
        }
    })
    res.send(user)
})
// Rota de atualizar algum dado de usuário - UPDATE 
app.patch('/atualizar', async (req:Request,res:Response) => {
    const user_id:number = Number(req.query.id)
    const email:string = String(req.query.email)
    const name:string = String(req.query.name)
    const password:string = String(req.query.senha)
    const age:number= Number(req.query.idade)
    const state:string = String(req.query.estado)
    const city:string = String(req.query.cidade)
    const patchUser = await prisma.user.update({where:{
        id:user_id,
    }, 
    data:{
        email:email,
        nome:name,
        senha:password,
        idade:age,
        estado:state,
        cidade:city
    }})
    res.send(patchUser)
})
// Rota pra Deletar algum usuário - DELETE 
app.delete('/deletar', async (req:Request, res:Response) => {
    const user_id:number = Number(req.query.id)
    const deleteFromExistence = await prisma.user.delete({where:{
        id:user_id
    }})
    res.send(deleteFromExistence)
})
// Launch App CRUD 
app.listen(port, () => {
    console.log(`App de Exemplo escutando a porta ${port}`)
})