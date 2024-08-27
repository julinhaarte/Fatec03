const fs = require('fs') //File System

const dadosMunicipios = fs.readFileSync("GeoLocalizacao/json/municipios.json")
const jsonMunicipios = JSON.parse(dadosMunicipios)

use('geo')
db.municipios.insertMany(jsonMunicipios)
db.municipios.createIndex({codigo_ibge:1},{unique:true, name:"idx_municipios_cod_IGBE"})

db.municipios.find().count()