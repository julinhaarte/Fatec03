use('aula02')
db.receitas.insertOne({
    _id: "123",
    nome: "Hambúrger de Unicórnio",
    preco: 20.99,
    ingredientes:["pão","queijo","unicónio"],
    vegetariano: false,
    dataCadastro: new Date(),
    detalhe:{
        "calorias": 1200,
        "porcao":1,
        "veggie": false
    }
})

db.receitas.insertOne({
    nome: "Hambúrger de Beterraba",
    preco: 19.99,
    ingredientes:["pão","ketchup","beterraba"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe:{
        "calorias": 1000,
        "porcao":1,
        "veggie": true
    }
})

use('aula02')
db.receitas.find() //select * from receitas

use('aula02')
db.receitas.find({},{})

use('aula02')
db.receitas.find({},{nome:1,preco:1})

use('aula02')
db.receitas.find({vegetariano: true},{nome:1,preco:1})

use('aula02')
db.receitas.find({preco:{$gte:15.00, $lte:30.00}},{nome:1, preco:1, "detalhe.calorias":1})

use('aula02')
db.receitas.find({$and:[
    {preco:{$lt: 20}},{nome: /bete/i}
]}, {nome:1, preco:1})

use('aula02')
db.receitas.find({$or:[
    {preco:{$lt: 20}},{nome: /bete/i}
]}, {nome:1, preco:1})

use('aula02')
db.receitas.updateOne({nome:/unicórnio/i},{$set:{preco:25.00}})

use('aula02')
db.receitas.updateMany({preco:{$gte:10}},{$set:{vegetariano:true}})

use('aula02')
db.receitas.find()

db.receitas.insertOne({
    nome: "Hambúrger de Beterraba",
    preco: 19.99,
    ingredientes:["pão","ketchup","beterraba"],
    vegetariano: true,
    dataCadastro: new Date(),
    detalhe:{
        "calorias": 1000,
        "porcao":1,
        "veggie": true
    }
})

use('aula02')
db.receitas.find().pretty()

use('aula02')
db.recipes.deleteOne(
    { "_id": "66baa8ed5880d1065c130645" }  // Filtro: documento que será deletado
)