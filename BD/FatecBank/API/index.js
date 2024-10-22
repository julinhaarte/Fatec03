import express from 'express'
import cors from 'cors'
import contasRoutes from './routes/contas.js'

const app = express()
const port = 3000

app.use(cors()) //habilita qq cliente consumir
app.use(express.json()) //define que usaremos JSON

app.use('/contas',contasRoutes)

app.listen(port, ()=> {
    console.log(`Servidor 2 rodando na porta ${port}`)
})