/* homepage */
const index = (req, res) => {
    res.render('index', { index: true, title: 'Home - Travlr Getaways' });
};

module.exports = {
    index
};