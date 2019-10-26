const router = require('express').Router();
const NewsAPI = require('newsapi');

router.get('/news', (req, res) => {
  const newsapi = new NewsAPI('3276da7108d44a1bb889ba074027676f');
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
  newsapi.v2
    .everything({
      // sources: 'bbc-news,the-verge',
      q: ['business'],
      // category: 'sports',
      language: 'en'
      // country: 'ng'
    })
    .then((response) => {
      res.status(200).json(response);
    });
});
module.exports = router;
