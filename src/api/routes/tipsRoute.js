module.exports = (server) => {
    const tipsController = require('../controllers/tipsController');
    
    // Récupération de tous les services
    server.get('/tips', tipsController.getAllTips);
    
    // Récupération d'un service par son ID
    server.get('/tips/:id', tipsController.getTipById);
    
    // Création d'un nouveau service
    server.post('/tips', tipsController.createTip);
    
    // Mise à jour d'un service par son ID
    server.put('/tips/:id', tipsController.updateTip);
    
    // Suppression d'un service par son ID
    server.delete('/tips/:id', tipsController.deleteTip);
    
    };