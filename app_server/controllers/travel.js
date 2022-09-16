var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* travel */
const travel = (req, res) => {
    res.render('travel', { travel: true, title: 'Travel - Travlr Getaways', trips });
};

module.exports = {
    travel
};