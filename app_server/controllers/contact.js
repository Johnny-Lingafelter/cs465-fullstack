/* contact */
const contact = (req, res) => {
    res.render('contact', { contact: true, title: 'Travlr Getaways'});
};

module.exports = {
    contact
};