use('geo')
db.municipios.find().count()

//Listar todos municípios terminados em tu $ força o termino
use('geo')
db.municipios.find({nome: /tu$/i},{nome:1, codigo_uf:1, _id:0}).
                                    sort({codigo_uf:1, nome:1})//1 crescente -1 decrescente

use('geo')
db.municipios.find().sort({nome:-1})

// count
use('geo')
db.municipios.find({capital:true}).count()

//limit -limitar o número de respostas
use('geo')
db.municipios.find({capital:true},{nome:1}).limit(5)
//skip - pula n registros
const registros = 10
const pagina = 2
use('geo')
db.municipios.find({capital:true},{nome:1}).limit(registros).skip(registros*pagina)