
const db = require("../../db");


// Récupération de tous les paiements
exports.getAllPayments = function(req, res) {
    db.query('SELECT * FROM tipsPayments', function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

// Récupération d'un paiement par l'id_user
exports.getPaymentByUserId = function(req, res) {
    const userId = req.params.id;
  //  db.query('SELECT * FROM tipsPayments WHERE id_user = ?', [userId], function(error, results) {
    db.query('SELECT users.*, SUM(tipspayments.amount) AS soldeTotal FROM users INNER JOIN tipspayments ON users.id = tipspayments.id_user WHERE users.id = ?', [userId], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

exports.getAllPaymentsAllUsers = function(req, res) {
    const userId = req.params.id;
  //  db.query('SELECT * FROM tipsPayments WHERE id_user = ?', [userId], function(error, results) {
    db.query('SELECT users.*, SUM(tipspayments.amount) AS soldeTotal FROM users INNER JOIN tipspayments ON users.id = tipspayments.id_user GROUP BY users.id', [userId], function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

// Création d'un nouveau paiement
exports.createPayment = function(req, res) {
    const { amount, id_user } = req.body;
    db.query('INSERT INTO tipsPayments (amount, id_user) VALUES (?, ?)', [amount, id_user], function(error, results) {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
};

// Suppression d'un paiement par son ID
exports.deletePayment = function(req, res) {
    const paymentId = req.params.id;
    db.query('DELETE FROM tipsPayments WHERE id = ?', [paymentId], function(error) {
        if (error) throw error;
        res.json({ message: 'Payment deleted successfully.' });
    });
};

