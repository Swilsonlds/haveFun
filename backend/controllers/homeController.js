const Test = require('../models/Test');

exports.getHome = async (req, res) => {
  try {
    const doc = await Test.create({ name: 'MongoDB Works!' });
    res.send(`<h1>${doc.name}</h1>`);
  } catch (err) {
    res.status(500).send('MongoDB error: ' + err.message);
  }
};