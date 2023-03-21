module.exports = (server) => {
    const paymentController = require('../controllers/paymentController');

    // Récupération de tous les paiements
    server.get('/payments', paymentController.getAllPayments);

    // Récupération du solde par l'id_user
    server.get('/payments/user/:id', paymentController.getPaymentByUserId);

// récupérer tous les soldes de tous les Users. 
    server.get('payments/allUser', paymentController.getAllPaymentsAllUsers);

    // Création d'un nouveau paiement
    server.post('/payments', paymentController.createPayment);

    // Suppression d'un paiement par son ID
    server.delete('/payments/:id', paymentController.deletePayment);
};