const pet = require('../models/pet');
module.exports = {
    allPets: async (req, res) => {
        try {
            const pets = await pet.find();
            res.json(pets);
        } catch (error) {
            res.status(500).json({mensaje: "🤮 Ocurrio un error"});
        }
    },
    createPet: async (req, res) => {
        try {
            const entrada = req.body;
            const savePet = await pet.create(entrada);
            res.status(201).json(savePet);
            //res.json
        } catch (error) {
            res.status(500).json({mensaje: "🤮 Ocurrio un error"});
        }
    },
    updatePet: async (req, res) => {
        try {
            const id = req.body.id;
            const petUpdate = {nombre : req.body.nombre, tipo: req.body.tipo};
            const resp = await pet.findOneAndUpdate({_id: id},petUpdate);
            res.json({id: resp});
        } catch (error) {
            res.status(500).json({mensaje: "🤮 Ocurrio un error"});
        }
    }
}