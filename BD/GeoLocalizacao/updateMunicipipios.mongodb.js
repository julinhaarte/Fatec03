use('geo')
db.municipios.find().forEach(function(municipios){
    db.municipios.updateOne(
        {_id: municipios._id},
        {
            $set: {
                local: {
                    type: 'Point',
                    coordinates: [municipios.longitude,municipios.latitude]
                }
            },

        },
        {$unset: {latitude: '', longitude: ''}}
    )})

    use('geo')
    db.municipios.find({},{nome:1, local:1})