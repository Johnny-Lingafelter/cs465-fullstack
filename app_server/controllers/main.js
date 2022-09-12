/* homepage */
const index = (req, res) => {
    res.render('index', { index: true, title: 'Travlr Getaways' });
};

module.exports = {
    index
};