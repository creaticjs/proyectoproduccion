const mongo = require('mongoose');
mongo.Promise = global.Promise;

module.exports = {
    conectar : async (app) => {
        await mongo.connect('mongodb://localhost/pets',{ useNewUrlParser: true });
        app.listen(3000, () => {
            console.log(`Mongo Run & Server Run 🧠`);
        });
    }
}