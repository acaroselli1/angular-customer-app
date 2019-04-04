// routes/customer_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      
    app.get('/customers/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('customers').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
      });

    app.post('/customers', (req, res) => {
      const data = { name: req.body.name, occupation: req.body.occupation };
      db.collection('customers').insert(data, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });

    app.delete('/customers/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('customers').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Note ' + id + ' deleted!');
          } 
        });
      });

      app.put('/customers/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const data = { name: req.body.name, occupation: req.body.occupation }
        db.collection('customers').update(details, data, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(data);
          } 
        });
      });
  };