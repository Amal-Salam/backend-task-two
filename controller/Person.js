const PersonModel = require('../models/model');

// Create and Save a new user
exports.create = async (req, res) => {
  if (
    !req.body.name 
  ) {
    res.status(400).send({ message: 'Content can not be empty!' });
  }

  const person = new PersonModel({
    name: req.body.name,
  });

  await person
    .save()
    .then((data) => {
      res.status(201).json({
        message: 'Person created successfully!!',
        person: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating user',
      });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
    const person = await PersonModel.find();
    res.status(200).json(person);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const person = await PersonModel.findById(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }

  const id = req.params.id;

  await PersonModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Person not found.`,
        });
      } else {
        res.send({ message: 'Person updated successfully.' });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  await PersonModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Person not found.`,
        });
      } else {
        res.send({
          message: 'Person deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
