const controllerPets = require('../controllers/pets')
module.exports = (app) => {
    app.get('/pets', controllerPets.allPets);
    app.post('/createpet', controllerPets.createPet);
    app.post('/updatepet', controllerPets.updatePet);
}