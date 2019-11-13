const bcrypt = require('bcrypt');

const { Login, Sacco, Riders } = require('../../models/data');

exports.register = (req, res) => {
  const { name, email, password, phone } = req.body;
  const role = ['admin'];
  const newAdmin = new Login({
    name,
    email,
    password,
    phone,
    role
  });
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        console.log(err);
      }
      newAdmin.password = hash;
      newAdmin.save({}, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.status(200).json({ data });
      });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  Login.findOne({ email: email }, (err, data) => {
    if (err) throw err;
    bcrypt.compare(password, data.password, function(err, result) {
      if (err) throw err;
      res.status(200).send(data);
    });
  });
};
