/* meals */
const meals = (req, res) => {
    res.render('meals', { meals: true, title: 'Travlr Getaways'});
};

module.exports = {
    meals
};