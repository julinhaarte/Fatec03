const fs = require('fs') //File System

const dadosRestaurantes = fs.readFileSync("GeoLocalizacao/json/restaurantes.json")
const jsonRestaurantes = JSON.parse(dadosRestaurantes)

use('geo')
db.restaurantes.insertMany(jsonRestaurantes)
db.restaurantes.createIndex({restaurante_id:1},{unique:true, name:"idx_cod_restaurantes"})

use('geo')
db.restaurantes.find().count()

use('geo')
db.restaurantes.find().forEach(function(restaurantes){
    db.restaurantes.updateOne(
        {_id: restaurantes._id},
        {
            $set: {
                local: {
                    type: 'Point',
                    coordinates: [restaurantes.endereço.coord[0],restaurantes.endereço.coord[1]]
                }
            },

        },
        {$unset: {coord: ''}}
    )})

    use('geo')
    db.restaurantes.find({},{restaurante_id:1, nome:1, bairro:1, cozinha:1})

    use('geo')
    db.restaurantes.find({},{restaurante_id:1, nome:1, bairro:1, cozinha:1, _id:0})

    use('geo')
    db.restaurantes.find
