/* travel view */
const about = (req, res) => {
    res.render('about', { about: true, title: 'Travlr Getaways'});
};

module.exports = {
    about
};