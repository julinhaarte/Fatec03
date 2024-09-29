//criando indices 2dsphere

use('geo')
db.estados.createIndex({local: '2dsphere'})

use('geo')
db.municipios.createIndex({local: '2dsphere'})

db.municipios.find({
    local:{
        $near:{
            $geometry: {
                type: "Point",
                coordinates: [-47.4495, -23.5313] //fatec
            },
            $maxDistance: 50000 //em metros
        }
    }
},{nome:1,_id:0})

//encontrar pontos em um raio (circulo)
use('geo')
db.municipios.find({
    local: {
        $geoWithin:{
            $centerSphere: [[-47.4495,-23.5313],20/6378.1]//radio em radianos
        }
    }
},{nome:1,_id:0}).sort({nome:1})
//6378.1

use ('geo')
db.municipios.find({
    local:{
        $geoWithin: {
            $polygon: 
                [
                  [
                    -47.466833041036324,
                    -23.483910199525084
                  ],
                  [
                    -47.48063234610865,
                    -23.510996299496682
                  ],
                  [
                    -47.453957238245266,
                    -23.5105859280185
                  ],
                  [
                    -47.44108404657004,
                    -23.499229168930782
                  ],
                  [
                    -47.458272281294796,
                    -23.455462868263155
                  ],
                  [
                    -47.466833041036324,
                    -23.483910199525084
                  ]
                ]
              
        }
    }
},{nome:1,_id:0})

use('geo')
db.municipios.find({
    local:{
        $geoWithin:{
            $box:[
                [-51.58,-21.99][-51.20, -22.24]
            ]
        }
    }
},{nome:1,_id:0})