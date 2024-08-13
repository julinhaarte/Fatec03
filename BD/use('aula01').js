use('aula01')

db.filmes.insertOne({"título:":"Star Wars",
                    "diretor":"George Lucas",
                    "ano":"1976",
                    "nota":"⭐⭐⭐⭐⭐"})

db.filmes.find() //select * from filmes

use('aula01')
db.filmes.insertMany({"título:":"Star Wars II",
    "diretor":"George Lucas",
    "ano":"1978",
    "nota":"⭐⭐⭐⭐⭐"},
    
)