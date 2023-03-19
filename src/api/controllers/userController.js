const db = require("../../db");

// Récupération de tous les utilisateurs
exports.getAllUsers = function(req, res) {
    db.query('SELECT * FROM users', function(error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
};

// Récupération d'un utilisateur par son ID
exports.getUserById = function(req, res) {
    const userId = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [userId], function(error, results, fields) {
        if (error) throw error;
        res.json(results[0]);
    });
};

// Création d'un nouvel utilisateur
exports.createUser = function(req, res) {
    const { firstname, lastname, status, active } = req.body;
    db.query('INSERT INTO users (firstname, lastname, status, active) VALUES (?, ?, ?, ?)', [firstname, lastname, status, active], function(error, results, fields) {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
};

// Mise à jour d'un utilisateur par son ID
exports.updateUser = function(req, res) {
    const userId = req.params.id;
    const { firstname, lastname, status, active } = req.body;
    db.query('UPDATE users SET firstname = ?, lastname = ?, status = ?, active = ? WHERE id = ?', [firstname, lastname, status, active, userId], function(error, results, fields) {
        if (error) throw error;
        res.json({ message: 'User updated successfully.' });
    });
};

// Suppression d'un utilisateur par son ID
exports.deleteUser = function(req, res) {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], function(error, results, fields) {
        if (error) throw error;
        res.json({ message: 'User deleted successfully.' });
    });
};