const db = require('../../db');

// Récupération de tous les tips
exports.getAllTips = function(req, res) {
  db.query('SELECT * FROM tableTips', function(error, results) {
    if (error) throw error;
    res.json(results);
  });
};

// Récupération d'un tip par son ID
exports.getTipById = function(req, res) {
  const tipId = req.params.id;
  db.query('SELECT * FROM tableTips WHERE id = ?', [tipId], function(error, results) {
    if (error) throw error;
    res.json(results[0]);
  });
};

// Création d'un nouveau tip // variable dans front pour remplacer le ID Service
exports.createTip = function(req, res) {
  const { tips, id_restaurantTable, id_service } = req.body;
  db.query('INSERT INTO tableTips (tips, id_restaurantTable, id_service) VALUES (?, ?, ?)', [tips, id_restaurantTable, id_service], function(error, results) {
    if (error) throw error;
    res.json({ id: results.insertId });
  });
};

// Mise à jour d'un tip par son ID
exports.updateTip = function(req, res) {
  const { tips, id_restaurantTable, tipId} = req.body;
  db.query('UPDATE tableTips SET tips = ?, id_restaurantTable = ? WHERE id = ?', [tips, id_restaurantTable,  tipId], function(error) {
    if (error) throw error;
    res.json({ message: 'Tip updated successfully.' });
  });
};

// Suppression d'un tip par son ID
exports.deleteTip = function(req, res) {
  const tipId = req.params.id;
  db.query('DELETE FROM tableTips WHERE id = ?', [tipId], function(error) {
    if (error) throw error;
    res.json({ message: 'Tip deleted successfully.' });
  });
};

// get tous les tips du service actuel. select * from tabletips where shiftclosed = 0 en affichant aussi la donnée shifttype
exports.getTipServiceUp = function(req, res) {
 db.query('SELECT *  FROM tableTips INNER JOIN services ON tableTips.id_service = services.id WHERE services.shiftClosed = 0', function(error, results){
  if (error) throw error;
  res.json(results);
 }) 
}