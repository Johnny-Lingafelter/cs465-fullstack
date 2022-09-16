/* about */
const about = (req, res) => {
    res.render('about', { about: true, title: 'About - Travlr Getaways'});
};

module.exports = {
    about
};