const db = require("../../db");
// Récupération de tous les services
exports.getAllServices = function(req, res) {
    db.query('SELECT * FROM services', function(error, results) {
        if (error) throw error;
        res.json(results);
    });
};

// Récupération d'un service par son ID
exports.getServiceById = function(req, res) {
    const serviceId = req.params.id;
    db.query('SELECT * FROM services WHERE id = ?', [serviceId], function(error, results) {
        if (error) throw error;
        res.json(results[0]);
    });
};

// Création d'un nouveau service
exports.createService = function(req, res) {
    const { shiftType } = req.body;
    db.query('INSERT INTO services (shiftType, shiftClosed) VALUES (?, ?)', [shiftType, false], function(error, results) {
        if (error) throw error;
        res.json({ id: results.insertId });
    });
};

// Mise à jour d'un service par son ID
exports.updateService = function(req, res) {
    const serviceId = req.params.id;
    const { shiftType, shiftClosed } = req.body;
    db.query('UPDATE services SET shiftType = ?, shiftClosed = ? WHERE id = ?', [shiftType, shiftClosed, serviceId], function(error) {
        if (error) throw error;
        res.json({ message: 'Service updated successfully.' });
    });
};

// Suppression d'un service par son ID
exports.deleteService = function(req, res) {
    const serviceId = req.params.id;
    db.query('DELETE FROM services WHERE id = ?', [serviceId], function(error) {
        if (error) throw error;
        res.json({ message: 'Service deleted successfully.' });
    });
}; 
// récupérer les utilisateurs en service 
exports.getServiceUsers = function(req,res) {
    qd.query('SELECT * FROM `users` WHERE `active` = 1',  function(error, results) {
        if (error) throw error;
        res.json(results);
    })
}


// récupération du service actuel pour le front 
exports.getServiceUp = function(req,res) {
    qd.query('SELECT * FROM `services` WHERE `shiftClosed` = 0',  function(error, results) {
        if (error) throw error;
        res.json(results);
    })
}

