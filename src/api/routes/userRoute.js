module.exports = (server) => {
  const userController = require('../controllers/userController');
  
  // Récupération de tous les services
  server.get('/users', userController.getAllUsers);
  
  // Récupération d'un service par son ID
  server.get('/users/:id', userController.getUserById);
  
  // Création d'un nouveau service
  server.post('/users', userController.createUser);
  
  // Mise à jour d'un service par son ID
  server.put('/users/:id', userController.updateUser);
  
  // Suppression d'un service par son ID
  server.delete('/users/:id', userController.deleteUser);
  
  };