const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const News = require('./models/data');

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect('mongodb+srv://nyatindopatrick:dogobigy97@riders-ecfkm.mongodb.net/newsApp?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('DB connected sucessfully'))
//   .catch(err => console.log(err));

app.use(express.static('dist'));

app.post('/api/addnews', (req, res) => {
  const {
    title, date, author, content, image, url
  } = req.body;
  const newData = new News({
    title, date, author, content, image, url
  });
  newData.save({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({ data });
  });
});

app.get('/api/getnews', (req, res) => {
  News.find({}, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.use('/api', require('./routes'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
