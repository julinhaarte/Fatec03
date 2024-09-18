use('geo')
//Agregação total do documeto
db.municipios.aggregate([
    {
        $lookup: {
          from: 'estados',
          localField: 'codigo_uf',
          foreignField: 'codigo_uf',
          as: 'estado'
        }
    }
])

use('geo')
//Agregação total do documeto excluindo algumas colunas
db.municipios.aggregate([
    {
        //lookup equivale ao join no sql
        $lookup: {
          from: 'estados',
          localField: 'codigo_uf',
          foreignField: 'codigo_uf',
          as: 'estado'
        }
    },
    {
        $match:{
            nome: {$eq: "Votorantim"}
        }
    },
    {
        //mostra os elementos selecionados
        $project: {
            "_id" : 0,
            "nome" : 1,
            "local.coordinates" : 1,
            "estado.nome" : 1
        }
    }
])

use('geo')
db.estados.aggregate([
    {
        $lookup: {
          from: 'municipios',
          localField: 'codigo_uf',
          foreignField: 'codigo_uf',
          as: 'relacaoMunicipios'
        }
    },
    {
        $match:{
            nome : {$eq : "Acre"}
        }
    },
    {
        $project: {
          _id: 0,
          nome:1,
          "relacaoMunicipios.nome" : 1
        }
    }
])