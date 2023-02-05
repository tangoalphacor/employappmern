
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://abhinav:123@cluster0.phxgany.mongodb.net/?retryWrites=true&w=majority";

let client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// get all employees
router.get('/employees', (req, res) => {
  collection.find({}).toArray((err, employees) => {
    res.send(employees);
  });
});

// add a new employee
router.post('/employees', (req, res) => {
  collection.insertOne(req.body, (err, result) => {
    res.send(result);
  });
});

// update an existing employee
router.put('/employees/:id', (req, res) => {
  collection.updateOne({ _id: new mongodb.ObjectID(req.params.id) }, { $set: req.body }, (err, result) => {
    res.send(result);
  });
});

// delete an employee
router.delete('/employees/:id', (req, res) => {
  collection.deleteOne({ _id: new mongodb.ObjectID(req.params.id) }, (err, result) => {
    res.send(result);
  });
});

module.exports = router;


