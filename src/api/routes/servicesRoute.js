module.exports = (server) => {
const serviceController = require('../controllers/serviceController');

//récupération du service actuellement UP
server.get('/services/up', serviceController.getServiceUp);
//récupération des utilisateurs en service
server.get('/services/users', serviceController.getServiceUsers);
// Récupération de tous les services
server.get('/services', serviceController.getAllServices);

// Récupération d'un service par son ID
server.get('/services/:id', serviceController.getServiceById);



// Création d'un nouveau service
server.post('/services', serviceController.createService);

// Mise à jour d'un service par son ID
server.put('/services/:id', serviceController.updateService);

// Suppression d'un service par son ID
server.delete('/services/:id', serviceController.deleteService);




};