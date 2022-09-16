/* contact */
const contact = (req, res) => {
    res.render('contact', { contact: true, title: 'Contact - Travlr Getaways'});
};

module.exports = {
    contact
};