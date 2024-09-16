import express, { Response, Request, json } from 'express'
import { PrismaClient } from '@prisma/client'
import { configDotenv } from 'dotenv'
import cors from "cors"
// Configurações Gerais do Servidor - dotenv, prisma e express aqui bem definidos 
configDotenv()
const server = express()
const port = 7001
const prisma = new PrismaClient()
const customers = prisma.customer
const counters = prisma.counter
server.use(json())
server.use(cors())


// Primeira Rota - Post dos customers 
server.post('/post_customer', async (req: Request, res: Response) => {
    const { nome, pao } = req.body
    const money: number = (0.5 * Number(pao))
    const new_customer = await prisma.customer.create({
        data: {
            name: nome,
            breads: Number(pao),
            cash: money
        }
    })
    console.log(new_customer)
    res.send(new_customer)
})

server.get('/clientes', async (req: Request, res: Response) => {
    const clientes = await prisma.customer.findMany({
        orderBy: {
            id: 'asc'
        }
    })
    res.status(200).json({ clientes: clientes })
})
server.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' })
        }
        const cliente = await prisma.customer.delete({ where: { id: id } })
        res.status(200).json(cliente)
    } catch (error) {
        res.status(400).json({ error: error })
    }
})
//Terceira Rota - Rota de subir o Contador 
server.get('/increase_counter', async (req: Request, res: Response) => {
    try {
        const customers = await prisma.customer.findMany({
            select: {
                breads: true,
                cash: true,
            },
        });

        const breadSum = customers.reduce((sum, customer) => sum + (customer.breads || 0), 0);
        const cashSum = customers.reduce((sum, customer) => sum + (customer.cash || 0), 0);

        const increase_counter = {breadSum, cashSum}

      /*   const increaseCounter = await prisma.counter.update({
            where: { idCount: 1 },
            data: {
                breadSum: breadSum,
                entry: cashSum,
            },
        }); */

        res.status(200).json(increase_counter);
    } catch (error) {
        res.status(400).json({ error: error});
    }
});
// Quarta Rota - Rota de descer o Contador 
server.put('/decrease_counter', async (req: Request, res: Response) => {
    const cicle = Number(await customers.count())
    const decrease_counter = await counters.update({ where: { idCount: 1 }, data: { peopleSum: cicle } })
    res.send(decrease_counter)
})

// Server Launch - listening on port 7001
server.listen(port, () => {
    console.log(`Servidor ON! Escutando na porta ${port}`)
})
