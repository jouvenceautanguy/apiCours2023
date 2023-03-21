module.exports = (server) => {
    const paymentController = require('../controllers/paymentController');
    const middleware = require("../midllewares/jwtMidlleware");

    // Récupération de tous les paiements
    server.get('/payments', middleware.verifyToken, paymentController.getAllPayments);

    // Récupération du solde par l'id_user
    server.get('/payments/user/:id', middleware.verifyToken, paymentController.getPaymentByUserId);

// récupérer tous les soldes de tous les Users. 
    server.get('/payments/allUser', middleware.verifyToken, paymentController.getAllPaymentsAllUsers);

    // Création d'un nouveau paiement
    server.post('/payments', middleware.verifyToken, paymentController.createPayment);

    // Suppression d'un paiement par son ID
    server.delete('/payments/:id', paymentController.deletePayment);
};