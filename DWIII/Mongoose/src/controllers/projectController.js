var Project = require('/models/projectModel');

exports.getProject = async function (req, res) {
    try{
        const result = await Project.find().populate('assignedTo');
        res.status(200).json(result)
    }
    catch(err){
        res.status(500).json(err);
    }
    
};

exports.create = function (req,res) {
    let project = new Project(
        {
            title: req.body.title,
            descripition: req.body.description,
            assignedTo: req.body.assignedTo
        }
    );
        project.save()
        .then(res.status(201).send(project.toJSON()))
        .catch((err) => {
            res.status(500).send({mesage: `${err.messase} - falha ao cadastrar projeto`})
        })
};

exports.details = async function (req,res) {
    try {
        const result = await Project.findById(req.params.id);
        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err);
    }
};