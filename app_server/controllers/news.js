/* news */
const news = (req, res) => {
    res.render('news', { news: true, title: 'News - Travlr Getaways'});
};

module.exports = {
    news
};