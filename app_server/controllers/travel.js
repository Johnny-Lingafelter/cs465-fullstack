/* travel */
const travel = (req, res) => {
    res.render('travel', { travel: true, title: 'Travlr Getaways'});
};

module.exports = {
    travel
};