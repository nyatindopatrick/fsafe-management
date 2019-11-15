<<<<<<< HEAD

=======
const { Login, Sacco, Riders } = require('../../models/data');

exports.sacco = (req, res) => {
  Sacco.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
};
>>>>>>> 9f35da1da0e38541a460f7e6f310dddcaa5853e5
