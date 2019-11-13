const { Login, Sacco, Riders } = require('../../models/data');

exports.sacco = (req, res) => {
  Sacco.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
};
