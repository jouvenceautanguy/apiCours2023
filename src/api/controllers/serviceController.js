const db = require("../../db");
// Récupération de tous les services
exports.getAllServices = function(req, res) {
    db.query('SELECT * FROM services', function(error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
};

// Récupération d'un service par son ID
exports.getServiceById = function(req, res) {
    const serviceId = req.params.id;
    db.query('SELECT * FROM services WHERE id = ?', [serviceId], function(error, results, fields) {
        if (error) throw error;
        res.json(results[0]);
    });
};

// Création d'un nouveau service
exports.createService = function(req, res) {
    const { shiftType, shiftClosed } = req.body;
    db.query('INSERT INTO services (shiftType, shiftClosed) VALUES (?, ?)', [shiftType, shiftClosed], function(error, results, fields) {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
};

// Mise à jour d'un service par son ID
exports.updateService = function(req, res) {
    const serviceId = req.params.id;
    const { shiftType, shiftClosed } = req.body;
    db.query('UPDATE services SET shiftType = ?, shiftClosed = ? WHERE id = ?', [shiftType, shiftClosed, serviceId], function(error, results, fields) {
        if (error) throw error;
        res.json({ message: 'Service updated successfully.' });
    });
};

// Suppression d'un service par son ID
exports.deleteService = function(req, res) {
    const serviceId = req.params.id;
    db.query('DELETE FROM services WHERE id = ?', [serviceId], function(error, results, fields) {
        if (error) throw error;
        res.json({ message: 'Service deleted successfully.' });
    });
};
