/* rooms */
const rooms = (req, res) => {
    res.render('rooms', { rooms: true, title: 'Travlr Getaways'});
};

module.exports = {
   rooms
};