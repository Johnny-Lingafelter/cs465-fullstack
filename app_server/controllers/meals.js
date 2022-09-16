/* meals */
const meals = (req, res) => {
    res.render('meals', { meals: true, title: 'Meals - Travlr Getaways'});
};

module.exports = {
    meals
};