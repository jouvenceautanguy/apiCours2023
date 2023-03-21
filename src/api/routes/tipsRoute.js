module.exports = (server) => {
  const tipsController = require("../controllers/tipsController");
  // Récupération de tous les tips
  server.get("/tips", tipsController.getAllTips);

  // récupère les tips du service actuel pour la vue
  server.get("/tips/tipService", tipsController.getTipServiceUp);

  // récup tous les tips par mois
  server.get("/tips/all", tipsController.getTotalTipsByMonth);

  // récup d'un tip par son ID
  server.get("/tips/:id", tipsController.getTipById);

  // Création d'un nouveau tip
  server.post("/tips", tipsController.createTip);

  // Mise à jour d'un tip par son ID
  server.put("/tips/:id", tipsController.updateTip);

  // Suppression d'un tip par son ID
  server.delete("/tips/:id", tipsController.deleteTip);

  
};
