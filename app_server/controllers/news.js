/* news */
const news = (req, res) => {
    res.render('news', { news: true, title: 'Travlr Getaways'});
};

module.exports = {
    news
};