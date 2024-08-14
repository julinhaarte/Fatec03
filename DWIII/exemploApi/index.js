const express = require('express')
const app = express()
const port = 3000
//vetor para salvar os nomes
let nomes = [];

app.use(express.json())

app.get('/', (req, res) => {
  res.json(nomes)

})

app.post('/',(req,res) => {
    console.log(req.body)
    //ao enviar os dados, serão armazenados na variável nome e adicionados ao vetor nome
    let nome = req.body.nome
    nomes.push(nome)
    res.send(`Nome:${req.body.nome}`)
})

app.post('/exercicio1', (req, res) =>{
    const tipo = req.body.tipo;
     
    const temperatura = req.body.temperatura;
     
    const resultado = Converte(tipo, temperatura);
     
    res.send(`Temperatura convertida: ${resultado}`);
   
  })
   
  function Converte(tipo, temperatura){
    let resultado;
   
    switch(tipo){
   
      case 'C':
      case 'c':
            resultado = (temperatura * 9/5) + 32;
            break;
   
      case 'c':
            resultado = (temperatura * 9/5) + 32;
            break;
   
      case 'F':
      case 'f':
            resultado = (temperatura - 32) * 5/9;
            break;
   
      default:
            resultado = 'Tipo inválido. Por favor insira um valor válido! ';
   
      }
     
      return resultado;
   
  }

app.post('/exercicio2', (req,res) => {
    let notas = [];
    const nota =req.body.nota;
    const media = Media(notas, alunos);
    res.send(`Média: ${media}`);

    function Media(notas,alunos){
        
    }
    
})
app.get('/exercicio2', (req, res) => {
    res.json(notas)
  
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

