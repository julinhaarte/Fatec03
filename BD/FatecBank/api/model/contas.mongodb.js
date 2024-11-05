use('fatecBank')
const contas = [{
    "numero": "12345",
    "nome" : "João da Silva",
    "cpf" : "123.456.789-10",
    "saldo_inicial" : 1000.00,
    "movimentações" : [
        {
        "tipo" : "credito",
        "valor" : 500.00,
        "descricao" : "Depósito em dinheiro",
        "data" : ISODate('2024-08-16T10:00:00Z')
    },
    {
        "tipo" : "debito",
        "valor" : 200.00,
        "descricao" : "Pagamento CPFL",
        "data" : ISODate('2024-08-18T10:00:00Z')
    }
    ]
},
{
    "numero": "54321",
    "nome" : "Joana da Silva",
    "cpf" : "321.654.987-01",
    "saldo_inicial" : 5200.00,
    "movimentações" : [
        {
        "tipo" : "credito",
        "valor" : 5000.00,
        "descricao" : "Depósito em dinheiro",
        "data" : ISODate('2024-08-12T10:00:00Z')
    },
    {
        "tipo" : "debito",
        "valor" : 120.00,
        "descricao" : "Pagamento SAAE",
        "data" : ISODate('2024-08-15T10:00:00Z')
    }
    ]
}]

db.contas.insertMany(contas)

//testanto se foi inserido
use('fatecBank')
db.contas.find()